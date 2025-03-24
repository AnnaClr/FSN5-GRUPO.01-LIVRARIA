import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    const { email, password, name } = req.body;
  

    if (!email || !password || !name) {
      return res.status(400).json({ error: "Email, senha e nome são obrigatórios." });
    }
  
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: "Email já cadastrado." });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name, 
        },
      });
  
      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar conta." });
    }
  });


app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(400).json({ error: "Usuário não encontrado." });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Senha incorreta." });
      }
  
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.json({ token, user: { email: user.email, id: user.id } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao realizar login." });
    }
  });

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acesso negado." });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token inválido." });
    req.userId = decoded.userId;
    next();
  });
};

app.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.userId } });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado." });

    res.json({ email: user.email, createdAt: user.createdAt });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar perfil." });
  }
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
