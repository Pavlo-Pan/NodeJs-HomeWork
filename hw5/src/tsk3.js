import express from "express";
const app = express();

app.get("/", async (request, response) => {
    console.log(request.method);
    console.log(request.url);
    response.send("<h1>home page</h1>");
    console.log("После отправки ответа на фронтенд");
});

// Обработка PUT и DELETE-запросов
app.all("/api/method-check", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    if (req.method === "PUT") {
        res.status(200).send("PUT-запрос обработан");
    } else if (req.method === "DELETE") {
        res.status(200).send("DELETE-запрос обработан");
    } else {
        res.status(405).send("Метод не поддерживается");
    }
});

app.listen(3200, () => console.log("Server running on 3200 port"));
