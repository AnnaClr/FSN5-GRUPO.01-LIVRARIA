// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
  register: async (req, res) => {
    const { name, email, password } = req.body;

    console.log('[REGISTER] Dados recebidos:', { name, email });

    if (!name || !email || !password) {
      console.error('[REGISTER] Falta algum campo obrigatório');
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      console.log('[REGISTER] Senha criptografada com sucesso.');

      const newUser = await User.create(name, email, hashedPassword);
      console.log('[REGISTER] Novo usuário criado no banco:', newUser);

      return res.status(201).json({ message: 'Usuário registrado com sucesso!', user: newUser });
    } catch (error) {
      console.error('[REGISTER] Erro ao registrar usuário:', error.message);
      return res.status(500).json({ message: 'Erro ao registrar usuário.' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    console.log('[LOGIN] Função de login chamada com dados:', { email });

    if (!email || !password) {
      console.error('[LOGIN] E-mail ou senha não informados.');
      return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
    }

    try {
      console.log('[LOGIN] Buscando usuário com email:', email);
      const users = await User.findByEmail(email);

      if (users.length === 0) {
        console.error('[LOGIN] Usuário não encontrado para:', email);
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      const user = users[0];
      console.log('[LOGIN] Usuário encontrado:', { id: user.id, email: user.email });

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        console.error('[LOGIN] Senha incorreta para:', email);
        return res.status(401).json({ message: 'Senha incorreta.' });
      }

      console.log('[LOGIN] Senha verificada com sucesso para:', email);

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('[LOGIN] Token JWT gerado para:', email);

      return res.status(200).json({
        message: 'Login realizado com sucesso!',
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error('[LOGIN] Erro inesperado no login:', error.message);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  },
};

module.exports = userController;
