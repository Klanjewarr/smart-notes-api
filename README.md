# 📝 Smart Notes API

A simple, clean, and modular **RESTful API** built with **Node.js** and **Express** that allows users to create, read, update, and delete (CRUD) personal notes.

> ⚡ Built to learn real-world backend fundamentals — no database yet, just in-memory storage!

---

## 🚀 Features

- ✅ Get all notes
- ✅ Create a new note
- ✅ Update a note by ID
- ✅ Delete a note by ID
- ✅ Modular folder structure (routes, controllers, data)
- ✅ Uses Express JSON middleware
- ✅ Environment variables with dotenv
- ✅ Runs with nodemon for faster dev

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Folder Structure

smart-notes-api/
│
├── controllers/
│ └── notesController.js # Logic for handling API routes
│
├── data/
│ └── notes.js # In-memory fake database (array)
│
├── routes/
│ └── notes.js # All /api/notes routes
│
├── .env # Environment variables (e.g., PORT)
├── app.js # Entry point
├── package.json # Dependencies and scripts
