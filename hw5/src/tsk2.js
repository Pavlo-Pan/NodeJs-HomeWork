import express from "express";
import * as fs from "node:fs/promises";
const app = express();

app.get("/", async (request, response) => {
    try {
        console.log(request.method);
        console.log(request.url);
        throw new Error("Тестовая ошибка");
        response.send("<h1>home page</h1>");
        console.log("После отправки ответа на фронтенд");
    } catch (error) {
        const errorMessage = `[${new Date().toISOString()}] ${error.stack}\n`;

        try {
            await fs.appendFile("errors.log", errorMessage);
        } catch (fileError) {
            console.error("Ошибка при записи в лог:", fileError);
        }
        response.status(500).set("Content-Type", "text/plain").send("Internal Server Error");
    }
});

app.listen(3100, () => console.log("Server running on 3100 port"));