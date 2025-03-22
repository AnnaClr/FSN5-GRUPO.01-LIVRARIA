const { findUserByEmail } = require('../models/userModel.js');

const getUserProfile = async (req, res) => {
    try {
        const user = await findUserByEmail(req.user.email);
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar perfil', error });
    }
};

module.exports = { getUserProfile };
