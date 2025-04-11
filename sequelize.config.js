require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'docker',
    password: process.env.DB_PASSWORD || 'docker',
    database: process.env.DB_NAME || 'docker',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  }
};
