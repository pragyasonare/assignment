# Naksh Jewels - E-commerce Internship Assessment

A complete mini e-commerce application built with React.js, Node.js, and Docker as per the internship assignment requirements.

## 🚀 Live Demo
- **Frontend Application:** http://localhost:3000
- **Backend API:** http://localhost:5000/api/products
- **Cart API:** http://localhost:5000/api/cart

## 📋 Features Implemented

### ✅ Frontend (React.js)
- Product listing page with static JSON data
- Product cards with image, name, price, description, and category
- Add to Cart functionality with real-time updates
- Cart page with quantity update (+/- buttons) and remove item option
- State management using React Context API (no Redux)
- Responsive design (mobile-friendly layout)
- No UI libraries used (pure CSS implementation)
- Functional components only
- Clean folder structure

### ✅ Backend (Node.js + Express)
- GET `/api/products` - Fetch all jewelry products
- POST `/api/cart` - Add item to cart
- PUT `/api/cart/:productId` - Update item quantity
- DELETE `/api/cart/:productId` - Remove item from cart
- GET `/api/cart` - Get current cart items
- Input validation middleware
- Proper error handling with status codes
- In-memory data storage (as per assignment requirements)
- Environment variables support using .env

### ✅ DevOps (Docker)
- Dockerfile for frontend (React application)
- Dockerfile for backend (Node.js API)
- docker-compose.yml for multi-container orchestration
- Application runs with single command: `docker-compose up`
- Network configuration for container communication

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| React.js | Frontend UI | 18.2.0 |
| Node.js | Backend Runtime | 18-alpine |
| Express.js | REST API Framework | 4.18.2 |
| Context API | State Management | Built-in |
| Docker | Containerization | Latest |
| Docker Compose | Container Orchestration | v2 |

## 📁 Project Structure
assignment/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.js
│   ├── Dockerfile
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md

## 🚀 Quick Start with Docker

### Prerequisites
- Docker Desktop installed and running
- Docker Compose (included with Docker Desktop)

### Steps to Run

1. **Clone the repository (if applicable) or extract the project**
2. **Navigate to project directory:**
   ```bash
   cd D:\assignment
to run :
   docker-compose up --build
   
to stop:
   docker-compose down
