
---

## 💬 **chat-app / README.md**
```markdown
# 💬 Chat App

A **Telegram-style real-time messaging app** built with **Next.js**, **Socket.IO**, and **MariaDB**.  
Focused on reliability, authentication, and instant delivery — not bloated features.

---

## 🧠 Why It Exists
I wanted to understand what happens between “Send” and “Received.”  
This app is my dissection of real-time communication: sockets, state, and sync.

---

## ⚙️ Features
- User authentication and registration  
- Real-time messaging with Socket.IO  
- Persistent chat rooms (MariaDB + Sequelize)  
- Modern interface using Next.js App Router  
- JWT authentication (secure sessions)  
- Local file upload support for images  
- Docker-ready environment for quick deployment  

---

## 🧩 Stack
| Layer | Tech |
|-------|------|
| Front-End | Next.js (App Router) |
| Backend | Node.js + Socket.IO |
| Database | MariaDB via Sequelize |
| Auth | JWT |
| Deployment | Docker + Nginx |

---

## 🛠️ Setup
```bash
git clone https://github.com/donaldjsexton/chat-app.git
cd chat-app
npm install
npm run dev
