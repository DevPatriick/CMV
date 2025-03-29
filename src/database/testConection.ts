import db from "./db"


async function connection() {
    try {
      await db.authenticate();  
      console.log('Conexão com o banco de dados foi estabelecida com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados:', error);
    }
  }
  
  
async function syncDatabase() {
    try {
      await db.sync();  
      console.log(`Banco de dados sincronizado com sucesso!`);
    } catch (error) {
      console.error('Erro ao sincronizar o banco de dados:', error);
    }
  }

  export default {
    connection,
    syncDatabase,
  };