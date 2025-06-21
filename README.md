# 🍽️ Restaurant Recipe App

A full-featured **Restaurant Recipe Management Application** built with **React** and **MongoDB**.  
Users can **log in** securely and perform **CRUD operations** on recipes, including adding a title, description, ingredients, and instructions.

This app is perfect for chefs, food bloggers, or restaurant owners to organize and manage recipes in a user-friendly interface.

---

## 🚀 Features

- 🔐 **User Authentication** (JWT or session-based login)
- 📋 **View Recipes** – Browse a list of all recipes
- ➕ **Add Recipes** – Create new recipes with detailed information
- ✏️ **Edit Recipes** – Modify existing recipe data
- ❌ **Delete Recipes** – Remove recipes as needed
- 🧾 **Each Recipe Includes:**
  - Title
  - Description
  - Ingredients
  - Instructions
- 🌐 Full-stack app with REST API and MongoDB integration
- 📱 Fully responsive design (mobile + desktop)

---

## 💻 Tech Stack

### Frontend:
- **React.js**
- **React Router**
- **Axios** – For HTTP requests
- **Tailwind CSS / CSS Modules** – Styling

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** – Database
- **Mongoose** – ODM for MongoDB
- **JWT** – For user authentication

---

## 🛠️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/restaurant-recipe-app.git
cd restaurant-recipe-app
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file inside the backend/ folder and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:

bash
Copy
Edit
npm run dev
The backend will run at http://localhost:5000

3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
Create a .env file inside the frontend/ folder and add:

env
Copy
Edit
VITE_API_URL=http://localhost:5000/api
Start the React development server:

bash
Copy
Edit
npm run dev
The frontend will run at http://localhost:5173

📁 Folder Structure
css
Copy
Edit
restaurant-recipe-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── main.jsx



🧪 Future Enhancements
Recipe categories (e.g., breakfast, lunch, dinner)

Upload images with Cloudinary or local storage

Search and filter recipes

Role-based access (admin, chef, viewer)

Export recipe as PDF
