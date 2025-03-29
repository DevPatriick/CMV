import express from "express";
import messager from "./utils/messagers/messager";
import apiConfig from "./config/api.config"; // Assumindo que apiConfig tem o valor da porta
import routes from './router/router';
import conection from "./database/testConection";

const app = express();

// Usar o middleware para converter corpo da requisição para JSON
app.use(express.json());
conection.connection()
conection.syncDatabase()
// Tentar a conexão com o banco de dados

// Definindo as rotas da API
app.use("/read", routes);

app.get('/', (req, res) => {
  res.send(messager.MESSAGE_SUCCESS);
});

// Inicia o servidor na porta configurada
app.listen(apiConfig.port, () => { 
  console.log(messager.MESSAGE_SUCCESS); 
});
