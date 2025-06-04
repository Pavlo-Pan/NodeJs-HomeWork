import express from "express";

const app = express();

app.get("/", async (request, response) => {
    console.log(request.method);
    console.log(request.url);
    response.send("<h1>home page</h1>");
    console.log("После отправки ответа на фронтенд");
})

app.get("/api/authorization", (req, res) => {
    const authHeader = req.get("Authorization"); 
    res.setHeader("Content-Type", "text/plain"); 
    if (!authHeader) {
        res.status(401).send("Unauthorized"); 
    } else {
        res.status(200).send("Authorization header received"); 
    }
});
app.listen(3000, () => console.log("Server running on 3000 port"));