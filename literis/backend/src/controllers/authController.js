const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { createUser, findUserByEmail } = require('../models/userModel.js');

dotenv.config();

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verifica se o usuário já existe
        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ message: 'Email já cadastrado' });

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria o usuário
        const newUser = await createUser({ name, email, password: hashedPassword });

        res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);

        if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

        // Compara senhas
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Credenciais inválidas' });

        // Gera token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login bem-sucedido', token, user });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
};

module.exports = { register, login };
