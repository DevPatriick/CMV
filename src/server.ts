import express from "express";
import messager from "./utils/messagers/messager";
import apiConfig from "./config/api.config"; 
import routes from './router/router';
import conection from "./database/testConection";
import cors from "@types/cors";  // Importando o pacote CORS

import './models/modelCompany';
import './models/modelCategory';
import './models/modelIngredients';
import './models/modelCMVIngredients';
import './models/associations';

const app = express();


app.use(cors({
  origin: 'http://localhost:4200',  
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization' 
}));

app.use(express.json());

conection.connection();
conection.syncDatabase();

app.use("/read", routes);

app.get('/', (req, res) => {
  res.send(messager.MESSAGE_SUCCESS);
});

app.listen(apiConfig.port, () => { 
  console.log(messager.MESSAGE_SUCCESS); 
});
