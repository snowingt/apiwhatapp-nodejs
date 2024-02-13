const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){
    
    const options = {
        host: "graph.facebook.com",
        path: "/v16.0/109241808832264/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAADFZCJXqZC7QBAE5dCpNI4tUNspB4uW1BcuBjRZBRqW4XZC8h4cD3dvh8wzXj6vn3SHmn95gAMP90QZA5SKSy9i7lAaJKmODjBJEgNrhO3I4XUcZA1Xj1HtMlwGKJnZC9HZBpIgLHJ78UjySCGyHDsMGWGYaWZByzxZBZBcUuAqfkaFpLwXnEPtMi8XOnGYLbFZCmK8XJOtEzVOWgZDZD"
       }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};