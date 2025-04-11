import express from "express";
import messager from "./utils/messagers/messager";
import apiConfig from "./config/api.config"; // Assumindo que apiConfig tem o valor da porta
import routes from './router/router';
import conection from "./database/testConection";

const app = express();


app.use(express.json());
conection.connection()
conection.syncDatabase()

app.use("/read", routes);

app.get('/', (req, res) => {
  res.send(messager.MESSAGE_SUCCESS);
});


app.listen(apiConfig.port, () => { 
  console.log(messager.MESSAGE_SUCCESS); 
});
