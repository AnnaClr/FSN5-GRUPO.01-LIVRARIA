import React, { useState } from "react";
import { Link } from "react-router-dom";
import { books } from "../../Vitrine/livros.js";
import {
  Container,
  TopBar,
  SearchBar,
  FilterIcon,
  Content,
  FilterSection,
  BookList,
  BookCard,
  Button,
} from "./style";

const Bookstore = () => {
  const [filters, setFilters] = useState({
    author: "",
    genre: "",
    publisher: "",
    maxphysicalPrice: Infinity,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const filteredBooks = books.filter((book) => {
    return (
      (filters.author === "" || book.author === filters.author) &&
      (filters.genre === "" || book.genre === filters.genre) &&
      (filters.publisher === "" || book.publisher === filters.publisher) &&
      (filters.maxphysicalPrice === Infinity || book.physicalPrice <= filters.maxphysicalPrice) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <Container>
      <TopBar>
        <SearchBar
          type="text"
          placeholder="Pesquisar livros..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FilterIcon onClick={toggleFilter}>
          {isFilterOpen ? "✖" : "☰"}
        </FilterIcon>
      </TopBar>

      <Content>
        <FilterSection isFilterOpen={isFilterOpen}>
          <h2>Filtrar por:</h2>
          <label>
            Autor:
            <select name="author" onChange={handleFilterChange}>
              <option value="">Todos</option>
              {[...new Set(books.map((book) => book.author))].map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </label>

          <label>
            Gênero:
            <select name="genre" onChange={handleFilterChange}>
              <option value="">Todos</option>
              {[...new Set(books.map((book) => book.genre))].map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>

          <label>
            Editora:
            <select name="publisher" onChange={handleFilterChange}>
              <option value="">Todos</option>
              {[...new Set(books.map((book) => book.publisher))].map((publisher) => (
                <option key={publisher} value={publisher}>
                  {publisher}
                </option>
              ))}
            </select>
          </label>

          <label>
            Preço Máximo:
            <input
              type="number"
              name="maxphysicalPrice"
              placeholder="Preço máximo"
              onChange={handleFilterChange}
            />
          </label>
        </FilterSection>

        <BookList>
          {filteredBooks.map((book) => (
            <BookCard key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>
              <p className="price"><span>R$ {(book.physicalPrice).toFixed(2)}</span></p>
              <Link to={`/product/${book.id}`}>
                <Button>Ver Detalhes</Button>
              </Link>
            </BookCard>
          ))}
        </BookList>
      </Content>
    </Container>
  );
};

export default Bookstore;