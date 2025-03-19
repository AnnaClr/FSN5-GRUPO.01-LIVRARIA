const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsear JSON

// Lista de livros
let livros = [
  { id: 1,  titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
  { id: 2,  titulo: 'Grande Sertão: Veredas', autor: 'João Guimarães Rosa' },
  { id: 3,  titulo: 'Vidas Secas', autor:'Graciliano Ramos'},
  { id: 4,  titulo: 'Memórias Póstumas de Brás Cubas', autor:'Machado de Assis'},
  { id: 5,  titulo: 'Quarto de Despejo', autor: 'Carolina Maria de Jesus'},
  { id: 6,  titulo: 'A Hora da Estrela', autor: 'Clarice Lispector'},
  { id: 7,  titulo: 'Ponciá Vicêncio', autor: 'Conceição Evaristo'},
  { id: 8,  titulo: 'Olhos D Água',  autor: 'Conceição Evaristo'},
  { id: 9,  titulo: 'O Conto da Aia', autor: 'Margaret Atwood' },
  { id: 10, titulo: 'Kindred: Laços de Sangue', autor: 'Octavia E. Butler' },
  { id: 11, titulo: 'Americanah', autor: 'Chimamanda Ngozi Adichie' },
  { id: 12, titulo: 'A Cor Púrpura', autor: 'Alice Walker' },
  { id: 13, titulo: 'Persépolis', autor: 'Marjane Satrapi' },
  { id: 14, titulo: 'Guerra e Paz', autor: 'Liev Tolstói' },
  { id: 15, titulo: 'A Revolução dos Bichos', autor: 'George Orwell' },
  { id: 16, titulo: 'Duna', autor: 'Frank Herbert' },
  { id: 17, titulo: 'Conclave', autor: 'Robert Harris' },
  { id: 18, titulo: 'Wicked', autor: 'Gregory Maguire' },
  { id: 19, titulo: 'Ainda Estou Aqui', autor: 'Marcelo Rubens Paiva' },
  { id: 20, titulo: 'O Reformatório Nickel', autor: 'Colson Whitehead' }
];

// Middleware para registrar logs
app.use((req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
});

// Middleware para verificar autenticação
const verificarAutenticacao = (req, res, next) => {
    const usuarioAutenticado = true; // Simulando um usuário autenticado
    if (usuarioAutenticado) {
        next();
    } else {
        res.status(401).send('Acesso negado. Faça login para continuar.');
    }
};

// Rota para listar todos os livros
app.get('/livros', (req, res) => {
    res.json(livros);
});

// Rota para buscar um livro por ID
app.get('/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (!livro) return res.status(404).send('Livro não encontrado.');
    res.json(livro);
});

// Rota para adicionar um novo livro (com autenticação)
app.post('/livros', verificarAutenticacao, (req, res) => {
    const livro = {
        id: livros.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor
    };
    livros.push(livro);
    res.status(201).json(livro);
});

// Rota para atualizar um livro (com autenticação)
app.put('/livros/:id', verificarAutenticacao, (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (!livro) return res.status(404).send('Livro não encontrado.');

    livro.titulo = req.body.titulo;
    livro.autor = req.body.autor;
    res.json(livro);
});

// Rota para deletar um livro (com autenticação)
app.delete('/livros/:id', verificarAutenticacao, (req, res) => {
    const livroIndex = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (livroIndex === -1) return res.status(404).send('Livro não encontrado.');

    const livroRemovido = livros.splice(livroIndex, 1);
    res.json(livroRemovido);
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Definição da porta e inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});