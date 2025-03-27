import React, { useState } from "react";
import { 
  FormContainer, 
  FormTitle, 
  Form, 
  Input, 
  TextArea, 
  SubmitButton 
} from "./style"; // Importando os estilos

const SuggestBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    imageUrl: "",  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log("Book Suggested Successfully!");
        setFormData({ title: "", author: "", description: "", imageUrl: "" });
      } else {
        console.error("Failed to suggest the book.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>SUGERIR UM LIVRO!</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Nome do Livro"
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
          placeholder="Breve descrição do livro"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <Input
          type="url"
          name="imageUrl"
          placeholder="Link com a imagem do livro"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default SuggestBookForm;
