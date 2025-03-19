const express = require('express'); //importa o Express
const app = express(); // Inicializa o aplicativo Express
const port = 3000; // Define a porta em que o servidor vai rodar

//Define uma rota básica que responde à requisição Get
app.get('/', (req, res) => {
    res.send('olá,  Mundo! Bem-vindo ao servidor Express!');
});

//Faz o servidor "escutar" na porta definida
app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${port}');
});