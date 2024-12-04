import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

// Middleware para processar JSON no corpo da requisição
app.use(express.json()); 
app.use(cors());
app.use(router);

app.listen(3001, () => {
    console.log("Servidor rodando na porta: 3001");
});
