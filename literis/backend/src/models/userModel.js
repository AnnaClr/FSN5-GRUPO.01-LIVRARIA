const prisma = require('../config/database.js');

const createUser = async (data) => {
    return await prisma.user.create({ data });
};

const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } });
};

module.exports = { createUser, findUserByEmail };
