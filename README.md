# UniFind — Database Integration

### Campus Lost & Found System | Project 3

> **DecodeLabs Full Stack Internship — Batch 2026**

---

## 📌 About

This repository contains the **database-integrated backend** for UniFind. Built with Node.js, Express, and MongoDB (Mongoose), this is the production-ready API that the frontend connects to.

---

## 🗂️ Project Structure

```
project3/
├── server.js           → Express server entry point (Port 4000)
├── db.js               → MongoDB connection
├── package.json        → Dependencies
├── test.http           → REST Client test file
├── uploads/            → Uploaded item images
├── models/
│   ├── Item.js         → Item schema (title, category, status, location...)
│   ├── User.js         → User schema (name, email, password)
│   ├── Message.js      → Chat message schema
│   └── Claim.js        → Claim request schema
└── routes/
    ├── items.js        → Items CRUD + image upload (Multer)
    ├── auth.js         → Register, Login, User count
    ├── messages.js     → Chat messages (save & load)
    └── claims.js       → Claim requests (submit, approve, reject)
```

---

## 🔌 API Endpoints

### Items

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/items`     | Get all items             |
| GET    | `/api/items/:id` | Get single item           |
| POST   | `/api/items`     | Add new item (with image) |
| DELETE | `/api/items/:id` | Delete item               |

### Auth

| Method | Endpoint                | Description          |
| ------ | ----------------------- | -------------------- |
| POST   | `/api/auth/register`    | Register new user    |
| POST   | `/api/auth/login`       | Login user           |
| GET    | `/api/auth/users/count` | Get total user count |

### Messages

| Method | Endpoint                | Description                |
| ------ | ----------------------- | -------------------------- |
| GET    | `/api/messages/:itemId` | Get chat messages for item |
| POST   | `/api/messages`         | Save new message           |

### Claims

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/api/claims`     | Get all claims          |
| POST   | `/api/claims`     | Submit new claim        |
| PUT    | `/api/claims/:id` | Approve or reject claim |

---

## 🗄️ Database Schemas

**Item:**

```js
{
  (title, category, status, location, description, poster, image, timestamps);
}
```

**User:**

```js
{
  (name, email(unique), password, timestamps);
}
```

**Message:**

```js
{
  (itemId, sender, text, type(sent / received), timestamps);
}
```

**Claim:**

```js
{
  (itemId,
    itemTitle,
    claimerName,
    claimerEmail,
    message,
    status(pending / approved / rejected),
    timestamps);
}
```

---

## 🚀 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start MongoDB (in separate terminal)
mongod

# 3. Start server
node server.js

# Server runs on
http://localhost:4000

# MongoDB connects to
mongodb://localhost:27017/unifind
```

---

## ✅ Features

- Full CRUD operations with MongoDB
- Image upload with Multer
- Real-time chat messages saved to DB
- Claim request system (submit, approve, reject)
- Input validation on all routes
- Proper HTTP status codes
- CORS enabled for frontend connection

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- Multer (image upload)
- CORS

---

## 👩‍💻 Built By

**Fareeha** — DecodeLabs Full Stack Internship, Batch 2026
