# Love Proposal App

This is a React app that lets you send a sweet proposal and messages using EmailJS. The background features a beautiful rose, and the UI is designed for a delightful experience.

---

##  Setting up EmailJS

1. **Create an EmailJS account:**
	- Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. **Create an Email Service:**
	- In the EmailJS dashboard, add your email service (e.g., Gmail, Outlook, etc.).
3. **Create an Email Template:**
	- Go to the "Email Templates" section and create a new template. You can use the default template or customize it.
4. **Get your Public Key, Service ID, and Template ID:**
	- Find these in the EmailJS dashboard under Account > API Keys and in your service/template settings.
5. **Create a `.env` file in your project root:**
	```env
	VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
	VITE_EMAILJS_SERVICE_ID=your_service_id_here
	VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
	```

---

##  Deploying to Vercel or Netlify

### 1. **Push your code to GitHub (or any git provider):**

### 2. **Vercel**
- Go to [Vercel](https://vercel.com/) and import your repository.
- In the project settings, add the same environment variables from your `.env` file under the "Environment Variables" section.
- Deploy the project. Vercel will automatically detect and build your React app.

### 3. **Netlify**
- Go to [Netlify](https://netlify.com/) and import your repository.
- In Site settings > Environment variables, add the same variables as above.
- Deploy the site. Netlify will build and host your app.

**Note:** Never commit your `.env` file to public repositories. Always use the dashboard to set environment variables for production.

---

##  Running Locally

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Create a `.env` file** (see above for contents).
3. **Start the development server:**
	```bash
	npm run dev
	```
4. **Open your browser:**
	- Visit `http://localhost:5173` (or the port shown in your terminal).

---

##  Customization
- You can change the rose image or text in `src/App.jsx`.
- All sensitive keys are loaded from environment variables for security.

---

##  Issues
If you have trouble with EmailJS, double-check your keys and template IDs, and make sure your email service is connected in the EmailJS dashboard.

---

Enjoy spreading love! 🌹
#MADE SPECIALL FOR YOU BY JAYANTH GOPALA V