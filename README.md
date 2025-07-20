# AI Teaching Platform 🎓🤖

A modern **AI-powered SaaS LMS (Learning Management System)** built using **Next.js 14**, **TailwindCSS**, **Clerk**, **Supabase**, **Stripe**, and **Vapi**. This platform enables real-time interactive learning experiences powered by an AI voice assistant and includes user authentication, subscriptions, session history, and more.

!

## 🚀 Features

- 🔐 Authentication with Clerk
- 💳 Subscription payments using Stripe
- 📡 Real-time database with Supabase
- 🗣️ AI voice agent integration using Vapi
- 📚 Companion Library for learners
- 📝 User profile & session history
- 📦 Fully responsive UI with TailwindCSS
- 📈 Production-ready SaaS starter

---

## 🛠️ Tech Stack

| Technology     | Description                            |
|----------------|----------------------------------------|
| **Next.js**    | React framework for building fullstack apps |
| **TailwindCSS**| Utility-first CSS for styling          |
| **Clerk**      | Authentication and user management     |
| **Stripe**     | Billing and subscription handling      |
| **Supabase**   | Realtime Postgres database and storage |
| **Vapi**       | AI voice assistant (conversational AI) |
| **Sentry**     | Monitoring & error tracking            |

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdullah-hassan7786/ai-teaching-platform.git
   cd ai-teaching-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root and add:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
   CLERK_SECRET_KEY=your_key
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   STRIPE_SECRET_KEY=your_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
   VAPI_API_KEY=your_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---


## 📚 Credits & Resources

This project is based on the **JavaScript Mastery SaaS 2025 Course**:  
[Watch on YouTube](https://www.youtube.com/watch?v=link-to-course)  
Instructor: [JavaScript Mastery](https://github.com/adrianhajdin)

---

## 🧑‍💻 Author

**Muhammad Abdullah Hassan**  
[GitHub Profile](https://github.com/Abdullah-hassan7786)

---

