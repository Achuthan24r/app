# app# 🚀 AI Resume Analyzer (Full Stack + Authentication)

An AI-powered Resume Analyzer web application that evaluates resumes, calculates ATS scores, detects skills, and provides improvement suggestions using OpenAI.

This production-ready version includes secure authentication, user-based resume history, and a personalized dashboard.

---

## 🌟 Features

### 🔐 Authentication
- User Registration
- Secure Login (JWT)
- Password Hashing (bcrypt)
- User-based data isolation

### 📄 Resume Analysis
- Upload Resume (PDF)
- Extract Resume Text
- AI-Powered Analysis
- ATS Score (0–100)
- Skills Detection
- Missing Skills Identification
- Improvement Suggestions

### 📊 Dashboard
- View Previous Resume Analyses
- Stored in MongoDB
- User-specific data

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS

### Backend
- Next.js API Routes
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### AI Integration
- OpenAI API

### File Handling
- pdf-parse
- FormData Upload

---

## 📂 Project Structure


resume-analyzer/
│
├── app/
│ ├── page.jsx
│ ├── dashboard/
│ │ └── page.jsx
│ └── api/
│ ├── analyze/
│ ├── resumes/
│ └── auth/
│ ├── login/
│ └── register/
│
├── lib/
│ ├── mongodb.js
│
├── models/
│ ├── Resume.js
│ └── User.js
│
├── public/
└── .env.local


---

## ⚙️ Installation Guide

### 1️⃣ Clone Repository


git clone https://github.com/your-username/ai-resume-analyzer.git

cd ai-resume-analyzer


---

### 2️⃣ Install Dependencies


npm install


---

### 3️⃣ Environment Variables

Create `.env.local`:


MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_secret_key


---

### 4️⃣ Run Development Server


npm run dev


Open in browser:


http://localhost:3000


---

## 📬 API Endpoints

### 🔐 Authentication

POST `/api/auth/register`


{
"name": "Achuthan",
"email": "email@example.com
",
"password": "password123"
}


POST `/api/auth/login`

Returns:


{
"token": "jwt_token_here"
}


---

### 📄 Resume Analysis

POST `/api/analyze`

- Accepts PDF file
- Returns structured AI analysis

---

### 📊 Get User Resumes

GET `/api/resumes`

Returns all resume analyses for logged-in user.

---

## 🔒 Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- User-specific resume storage
- Environment variable protection

---

## 🚀 Deployment

Frontend & Backend:
- Vercel

Database:
- MongoDB Atlas

Environment Variables:
- Set inside Vercel dashboard

---

## 📈 Future Enhancements

- Job Description Matching
- Resume Rewriting Generator
- ATS Score Visualization
- Admin Panel
- SaaS Subscription Model
- Payment Integration
- Multi-language Support

---

## 🎯 Why This Project Stands Out

This project demonstrates:

- Full Stack Development
- Authentication & Authorization
- AI API Integration
- File Handling & Parsing
- Database Relationships
- Production-Level Architecture
- Secure Backend Design

This is a recruiter-ready portfolio project.

---

## 👨‍💻 Author

Achuthan Rameshkumar  
Full Stack Developer  
React | Next.js | MongoDB | Node.js  

---

## 📜 License

This project is open-source and free to use.
