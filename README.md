
# 📚 Book Management REST API

This is a simple RESTful API built with **Node.js** and **Express.js** to manage a list of books. It supports basic CRUD operations — Create, Read, Update, and Delete — using in-memory storage (no database).

## 🚀 Features

- View all books (GET `/books`)
- Add a new book (POST `/books`)
- Update an existing book by ID (PUT `/books/:id`)
- Delete a book by ID (DELETE `/books/:id`)

## 🛠 Tech Stack

- Node.js
- Express.js
- JSON (in-memory storage)
- Postman (for testing)

## 📦 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhruvi207/rest_api.git
   cd rest_api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. API runs on `http://localhost:3000`

## 📬 API Endpoints

| Method | Endpoint      | Description             |
|--------|---------------|-------------------------|
| GET    | `/books`      | Get all books           |
| POST   | `/books`      | Add a new book          |
| PUT    | `/books/:id`  | Update a book by ID     |
| DELETE | `/books/:id`  | Delete a book by ID     |

## 📌 Note

- Data is stored in memory (it resets when server restarts).
- Test endpoints using [Postman](https://www.postman.com/) or curl.

## ✅ Task Info

- **Task:** Create REST API to manage books
- **Internship:** Web Development
- **Submitted by:** Dhruvi solanki
