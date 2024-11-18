const mysql = require('mysql2');
require('dotenv').config();

console.log('Tentando conectar ao banco de dados...'); // Mensagem de início

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
    waitForConnections: true,

    ssl: {
        rejectUnauthorized: true // ou false, conforme necessário para seu ambiente
    }
})

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err); // Mostra erros de conexão
    } else {
        console.log('Conexão ao banco de dados estabelecida com sucesso!'); // Mostra sucesso
        connection.release(); // Libera a conexão de volta ao pool
    }
});

module.exports = pool.promise();

