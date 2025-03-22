const express = require('express');
const { getUserProfile } = require('../controllers/userController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;
