const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const ChatGpt = require("../services/ChatgptService");
const e = require("express");


// Función para manejar mensajes de saludo
function handleGreeting(number) {
    const model = whatsappModel.MessageText("Hola, un gusto saludarte. 👋", number);
    const modelList = whatsappModel.MessageList(number);
    return [model, modelList];
}

// Función para hablar directo con un agente
function handleAgente(number) {
    const model = whatsappModel.MessageText("Porfavor describe tu inconveniente", number);
    return [model];
}
// Función para manejar mensajes de agradecimiento
function handleThanks(number) {
    const model = whatsappModel.MessageText("Gracias a ti por escribirme. 😉😎", number);
    return [model];
}

// Función para manejar mensajes de despedida
function handleGoodbye(number) {
    const model = whatsappModel.MessageText("Ve con cuidado. 😊", number);
    return [model];
}

// Función para manejar mensajes sobre tutoriales
function handleTutorials(number) {
    const model = whatsappModel.TutorialList(number);
    return [model];
}
// Función para manejar mensajes sobre soporte para los sistemas
function handleSistemaSeleccion(number) {
    const model = whatsappModel.SoportelList(number);
    return [model];
}

// Función para manejar mensajes sobre la agencia
function handleAgency(number) {
    const model = whatsappModel.MessageText("Aquí tienes nuestra dirección. 😊", number);
    const modelLocation = whatsappModel.MessageLocation(number);
    return [model, modelLocation];
}

// Función para manejar mensajes de contacto
function handleContact(number) {
    const model = whatsappModel.MessageText("📞*Centro de contacto:*\n(809)584-9290", number);
    return [model];
}
// Función para manejar los videos
function handleVideo(number) {
    const model = whatsappModel.MessageText("Aquí tienes un video de cómo hacer el inventario. 😉", number);
    const modelVideo = whatsappModel.SampleVideo(number);
    return [model, modelVideo];
    
}

// Función para manejar mensajes sobre inventario
function handleInventory(number) {
    const model = whatsappModel.MessageText("Aquí tienes un video de cómo hacer el inventario. 😉", number);
    const modelVideo = whatsappModel.SampleVideoInventario(number);
    return [model, modelVideo];
}

// Función para manejar mensajes sobre tutoriales de pymes
function handlePymesTutorials(number) {
    const model = whatsappModel.MessageText("Aquí tienes todos los tutoriales de Pymes", number);
    const modelPymes = whatsappModel.PymesTutorial(number);
    return [model, modelPymes];
}
// Función para manejar mensajes sobre tutoriales de pymes
function handleIssues (number) {
    const model = whatsappModel.MessageText("Aqui tienes una lista selecciona cual es tu caso", number);
    const modelIssues = whatsappModel.IssuesList(number);
    return [model, modelIssues];
}

// Función para manejar mensajes con respuestas generadas por ChatGpt
async function handleChatGptResponse(textUser, number) {
    const message = await ChatGpt.GetMessage(textUser);
    const model = whatsappModel.MessageText(message, number);
    return [model];
}

// Función principal para procesar mensajes
async function Process(textUser, number) {
    textUser = textUser.toLowerCase();
    const models = [];

    if (textUser.includes("hola") || textUser.includes("buenas") || textUser.includes("buenos dias") || textUser.includes("buenas tardes") || textUser.includes("buenas noches") || textUser.includes('ey') || textUser.includes("hello") || textUser.includes('hi') || textUser.includes("saludos") || textUser.includes('que tal') || textUser.includes("como estas") || textUser.includes('que hay') || textUser.includes("como te va") || textUser.includes('que pasa') || textUser.includes("que onda") || textUser.includes('que tal') || textUser.includes("klk")) {
        models.push(...handleGreeting(number));
    } else if (textUser.includes("gracias")) {
        models.push(...handleThanks(number));
    } else if (textUser.includes("adios") || textUser.includes("adiós") || textUser.includes("bye") || textUser.includes("me voy")) {
        models.push(...handleGoodbye(number));
    } else if (textUser.includes("tutoriales")) {
        models.push(...handleTutorials(number));
    } else if (textUser.includes("agencia")) {
        models.push(...handleAgency(number));
    } else if (textUser.includes("contacto")) {
        models.push(...handleContact(number));
    } else if (textUser.includes("como hacer el inventario")) {
        models.push(...handleInventory(number));
    } else if (textUser==("tutorial pymes")) {
        models.push(...handlePymesTutorials(number));
    } else if (textUser.includes("inventario")) {
        models.push(...handleVideo(number));
    }
     else if (textUser==("soporte")) {
        models.push(...handleSistemaSeleccion(number));
    }
     else if (textUser==("soporte pymes") 
     || textUser==("soporte express") 
    || textUser==("soporte pos")
    || textUser==("soporte farmcaica")
    || textUser==("soporte prestamos")
    || textUser==("soporte celulares")
    || textUser==("soporte motos")
    
    ) {
        models.push(...handleIssues(number));
    }
     
    else {
        models.push(...handleChatGptResponse(textUser, number));
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process
};
