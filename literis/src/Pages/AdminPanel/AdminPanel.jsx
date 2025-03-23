import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Table,
  Button,
  Form,
  Input,
  TextArea,
} from "./style"; // Importa os estilos atualizados

const API_URL = "http://localhost:3000/api/books";

const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    imageUrl: "",
  });
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    console.log("📥 Iniciando busca pelos livros...");
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      console.log("🔍 Fazendo requisição para buscar todos os livros...");
      const response = await axios.get(API_URL);
      console.log("✅ Livros carregados com sucesso:", response.data.books);
      setBooks(response.data.books || []);
    } catch (error) {
      console.error("❌ Erro ao buscar livros:", error.message);
    }
  };

  const handleChange = (e) => {
    console.log(`✏️ Alterando campo '${e.target.name}':`, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBook) {
        console.log(`🛠 Atualizando livro com ID ${editingBook.id}...`);
        const response = await axios.put(`${API_URL}/${editingBook.id}`, formData);
        console.log("✅ Livro atualizado com sucesso:", response.data.book);
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === editingBook.id ? response.data.book : book
          )
        );
      } else {
        console.log("➕ Adicionando novo livro...");
        const response = await axios.post(API_URL, formData);
        console.log("✅ Livro adicionado com sucesso:", response.data.book);
        setBooks((prevBooks) => [...prevBooks, response.data.book]);
      }
      setFormData({ title: "", author: "", description: "", imageUrl: "" });
      setEditingBook(null);
    } catch (error) {
      console.error("❌ Erro ao salvar livro:", error.message);
    }
  };

  const handleEdit = (book) => {
    console.log(`🛠 Preparando para editar livro:`, book);
    setFormData(book);
    setEditingBook(book);
  };

  const handleDelete = async (id) => {
    try {
      console.log(`❌ Excluindo livro com ID ${id}...`);
      await axios.delete(`${API_URL}/${id}`);
      console.log("✅ Livro excluído com sucesso!");
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error("❌ Erro ao excluir livro:", error.message);
    }
  };

  return (
    <Container>
      <Title>Painel Administrativo</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Título do Livro"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="author"
          placeholder="Autor do Livro"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <TextArea
          name="description"
          placeholder="Descrição do Livro"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <Input
          type="url"
          name="imageUrl"
          placeholder="Link para a Imagem"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
        <Button type="submit">
          {editingBook ? "Atualizar" : "Adicionar"} Livro
        </Button>
      </Form>

      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>
                <a href={book.imageUrl} target="_blank" rel="noopener noreferrer">
                  Ver Imagem
                </a>
              </td>
              <td>
                <Button onClick={() => handleEdit(book)}>Editar</Button>
                <Button onClick={() => handleDelete(book.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPanel;
