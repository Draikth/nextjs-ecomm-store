# Next.js Ecommerce Store Project

An Ecommerce store built using Next.js.

Once completed should have:

- A products page to list all products
- A page for each single product with ability to "add quantity to cart"
- A cart page showing all listed products added and total price.
- A checkout page that asks for shipping and payment info
- A "Thank you for Patronage" page for once items have been bought
- A header with a link to the Cart, showing the number of items in the cart

## Technologies

- Next.js
- Postgres.js

## Database Setup (placeholder from UpLeveled example)

If you don't have PostgreSQL installed yet, follow the instructions from the PostgreSQL step in UpLeveled's System Setup Instructions.

Copy the .env.example file to a new file called .env (ignored from Git) and fill in the necessary information.

Then, connect to the built-in postgres database as administrator in order to create the database:

Windows

If it asks for a password, use postgres.

psql -U postgres
macOS

psql postgres
Linux

sudo -u postgres psql
Once you have connected, run the following to create the database:

CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
\connect <database name>
CREATE SCHEMA <schema name> AUTHORIZATION <user name>;
Quit psql using the following command:

\q
On Linux, you will also need to create a Linux system user with a name matching the user name you used in the database. It will prompt you to create a password for the user - choose the same password as for the database above.

sudo adduser <user name>
Once you're ready to use the new user, reconnect using the following command.

Windows and macOS:

psql -U <user name> <database name>
Linux:

sudo -u <user name> psql -U <user name> <database name>
