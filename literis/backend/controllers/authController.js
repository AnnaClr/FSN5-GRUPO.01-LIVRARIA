const UserModel = require('../models/userModel');

const AuthController = {
  // Função para registrar um novo usuário
  async register(req, res) {
    try {
      const { email, password } = req.body;
      console.log("📥 Recebendo dados para registro:", req.body);

      // Verifica se o email já está registrado
      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) {
        console.log("❌ Email já registrado:", email);
        return res.status(400).json({ message: 'Email já registrado.' });
      }

      // Cria um novo usuário
      const newUser = await UserModel.create({ email, password });
      console.log("✅ Usuário registrado com sucesso:", newUser);
      res.status(201).json({ message: 'Usuário registrado com sucesso!', user: newUser });
    } catch (error) {
      console.error("❌ Erro ao registrar usuário:", error.message);
      res.status(500).json({ message: 'Erro ao registrar usuário.', error: error.message });
    }
  },
};

module.exports = AuthController;
