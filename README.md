# 💬 Chat App

A **Telegram-style real-time messenger** built from scratch with **Next.js**, **Socket.IO**, and **MariaDB**.
Every event, connection, and packet is wired manually — no templates, no scaffolds.

---

## 🧠 Why It Exists
I wanted to feel what “real-time” actually means at the socket level.
This app became a study in synchronization — how state, latency, and identity all collide in motion.

---

## ⚙️ Features
- Secure authentication and registration (JWT)
- Persistent chat threads with live updates
- Image upload pipeline (local storage)
- Modular service layout for future scaling
- Docker + Nginx deployment ready

---

## 🧩 Stack
| Layer | Tech |
|-------|------|
| Frontend | Next.js (App Router) |
| Realtime | Socket.IO + WebSockets |
| Database | MariaDB via Sequelize |
| Auth | JWT |
| Deployment | Docker + Nginx |

---

## 🧰 Run It
```bash
git clone https://github.com/donaldjsexton/chat-app.git
cd chat-app
npm install
npm run dev
```
Visit → [http://localhost:3000](http://localhost:3000)

---

## 🛣️ Next Steps
- Offload media to Cloudflare R2
- Add group chats + typing indicators
- Abstract socket layer for multi-protocol support

---

## 💡 Philosophy
Chat is human latency turned visible.
This project exists to understand that timing — not to imitate an app, but to dissect communication itself.

---

**Donald Sexton**
[GitHub](https://github.com/donaldjsexton) • [LinkedIn](https://linkedin.com/in/donaldjsexton) • [X](https://x.com/donaldjsexton_)
