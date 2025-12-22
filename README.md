# 🎬 Netflix GPT

Netflix GPT is a modern, Netflix-inspired movie browsing application built using **React**, **Tailwind CSS**, **Firebase**, **Redux**, **TMDB API**, and **OpenAI-powered GPT Search**.  
The project focuses on real-world frontend architecture, authentication flows, API integration, performance optimization, and clean UI/UX.

---

## 🚀 Tech Stack

- **Frontend**: React (Create React App)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: Firebase Authentication
- **APIs**:
  - TMDB (Movie data)
  - OpenAI (GPT-powered search)
- **Deployment**: Firebase Hosting

---

## 🧩 Application Workflow

### 🔐 Authentication Flow
- Sign Up & Sign In pages
- Form validation for email & password
- Firebase authentication integration
- Create user account
- Sign in user API
- Sign out functionality
- Update user profile
- Protected routes:
  - Redirect unauthenticated users from `/browse` → `/signin`
  - Redirect authenticated users from `/signin` → `/browse`

---

### 🗂️ Project Architecture
- Configured Tailwind CSS
- Routing using React Router
- Centralized constants file for hardcoded values
- Redux Store setup with:
  - `userSlice`
  - `movieSlice`
- Clean separation of concerns using **custom hooks**

---

## 🎥 Movie Features (TMDB Integration)

- Registered app on TMDB and generated access token
- Fetch **Now Playing Movies** using TMDB API
- Custom hook for now playing movies
- Store movie data in Redux
- Fetch trailer video data
- Store trailer data in Redux
- Embed YouTube trailer:
  - Autoplay
  - Muted
- TMDB Image CDN integration

---

## 🖥️ UI & Layout

### 🧱 Main Layout
- Header with authentication-aware UI
- Main Container:
  - Background trailer video
  - Movie title & description
  - Play & More Info buttons
- Secondary Container:
  - Multiple movie lists (vertically scrollable)

### 🎨 Styling
- Tailwind CSS for responsive and modern UI
- Netflix-like layout and animations
- Clean, scalable component structure

---

## 🤖 GPT Features

- Dedicated GPT Search Page
- GPT Search Bar
- AI-powered movie suggestions
- Multilingual support in the application

---

## ✨ Features Summary

- Login / Signup with Firebase
- Protected routes
- Movie browsing experience
- Trailer playback
- AI-powered search
- Multi-language support
- Scalable architecture
- Production-ready deployment

---

## 🌍 Deployment

- Deployed to **Firebase Hosting**
- Environment variables secured
- Production build optimization

---

## 📌 Learnings & Takeaways

- Real-world authentication flow using Firebase
- Redux Toolkit for scalable state management
- Custom hooks for cleaner logic
- API integration & error handling
- Route protection & user session handling
- Tailwind CSS for rapid UI development
- Integrating AI features into frontend apps

---

## 📷 Preview



---

## 🧑‍💻 Author

**Ayush Sahu**  
Frontend Developer | React | Tailwind | Firebase | AI-integrated Apps
