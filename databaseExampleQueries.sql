CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(60) NOT NULL,
  type varchar(60) NOT NULL,
  image varchar(60) NOT NULL,
  price integer
);

INSERT INTO products
(name, type, image, price)
VALUES
('Chocolate-Chip Cookies', 'cookie', 'chocolate-chip-cookies', 12),
('Oatmeal Cookies', 'cookie', 'oatmeal-cookies', 10),
('Ginger Cookies', 'cookie', 'ginger-cookies', 8),
('Sourdough Loaf', 'bread', 'sourdough-loaf', 15),
('Carrot Cake', 'cake', 'carrot-cake', 20),


CREATE DATABASE nextjs_ecomm_store;
CREATE USER nextjs_ecomm_store WITH ENCRYPTED PASSWORD 'nextjs_ecomm_store';
GRANT ALL PRIVILEGES ON DATABASE nextjs_ecomm_store TO nextjs_ecomm_store;
\connect nextjs_ecomm_store;
CREATE SCHEMA nextjs_ecomm_store AUTHORIZATION nextjs_ecomm_store;
