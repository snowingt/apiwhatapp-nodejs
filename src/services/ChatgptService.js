const { OpenAI } = require("openai");


const openai = new OpenAI({
  apiKey:  '',
});


async function GetMessage(message) {
  const previousThreads = [];
  try {
    const assistant = await openai.beta.assistants.retrieve(
      "asst_1esBOvDpe9Cq0VQJOyA4luEJ"
    );
   
    // Create a thread
  let thread;

    // Si hay hilos de conversación anteriores, utiliza el último hilo
    if (previousThreads && previousThreads.length > 0) {
      thread = previousThreads[previousThreads.length - 1];
    } else {
      // Si no hay hilos anteriores, crea un nuevo hilo
      thread = await openai.beta.threads.create();
      // Agrega el nuevo hilo al arreglo de conversaciones
      previousThreads.push(thread);
    }


    // Pass in the user question into the existing thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // Use runs to wait for the assistant response and then retrieve it
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );

    // Polling mechanism to see if runStatus is completed
    // This should be made more robust.
    while (runStatus.status !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    // Get the last assistant message from the messages array
    const messages = await openai.beta.threads.messages.list(thread.id);

    // Find the last message for the current run
    const lastMessageForRun = messages.data
      .filter(
        (message) => message.run_id === run.id && message.role === "assistant"
      )
      .pop();

    // If an assistant message is found, console.log() it

    if (lastMessageForRun) {
      return (`${lastMessageForRun.content[0].text.value} \n`);
      
    }

   
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
    GetMessage
}