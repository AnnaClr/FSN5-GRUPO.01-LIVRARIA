const http = require('http'); // Módulo nativo do Node.js
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Código de status HTTP OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá, esse é o servidor Node js 1\n'); // Resposta enviada ao cliente
});

// O servidor vai escutar requisições na porta 3000
servidor.listen(3000,() => {
console.log('Servidor rodando em http://localhost:3000');
});
