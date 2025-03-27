CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  payment_method VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  book_id INT NOT NULL,
  quantity INT NOT NULL,
  price NUMERIC(10, 2) NOT NULL
);


-- 1. Seleciona todos os registros da tabela `order_items` ordenados pelo ID em ordem crescente
SELECT * 
FROM public.order_items
ORDER BY id ASC;

-- 2. Seleciona o título, quantidade e preço dos itens do pedido com order_id = 3
SELECT title, quantity, price
FROM order_items
WHERE order_id = 3;

-- 3. Seleciona o título, quantidade, preço e calcula o subtotal (quantidade * preço) dos itens do pedido com order_id = 3
SELECT title, quantity, price, (quantity * price) AS subtotal
FROM order_items
WHERE order_id = 3;

-- 4. Soma o preço total (quantidade * preço) de todos os itens do pedido com order_id = 3
SELECT SUM(quantity * price) AS total_price
FROM order_items
WHERE order_id = 3;

-- 5. Soma o preço total (quantidade * preço) de todos os pedidos agrupados por order_id
SELECT order_id, SUM(quantity * price) AS total_price
FROM order_items
GROUP BY order_id;

-- 6. Lista os títulos de livros e a quantidade total vendida de cada título em todos os pedidos
SELECT title, SUM(quantity) AS total_sold
FROM order_items
GROUP BY title
ORDER BY total_sold DESC;

-- 7. Seleciona os itens mais caros (com maior preço unitário) do pedido com order_id = 3, em ordem decrescente de preço
SELECT title, quantity, price
FROM order_items
WHERE order_id = 3
ORDER BY price DESC;

-- 8. Calcula o total de todos os pedidos, ordenando pelos pedidos de maior valor total
SELECT order_id, SUM(quantity * price) AS total_price
FROM order_items
GROUP BY order_id
ORDER BY total_price DESC;

-- 9. Filtra os pedidos com o valor total entre 100 e 500
SELECT order_id, SUM(quantity * price) AS total_price
FROM order_items
GROUP BY order_id
HAVING SUM(quantity * price) BETWEEN 100 AND 500;

-- 10. Calcula o preço médio dos itens de cada título em todos os pedidos
SELECT title, AVG(price) AS average_price
FROM order_items
GROUP BY title;
