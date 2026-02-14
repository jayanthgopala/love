# Love Proposal App

This is a React app that lets you send a sweet proposal and messages using EmailJS. The background features a beautiful rose, and the UI is designed for a delightful experience.



---

##  Setting up EmailJS

1. **Create an EmailJS account:**
	- Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. **Create an Email Service:**
	- In the EmailJS dashboard, add your email service (e.g., Gmail, Outlook, etc.).
3. **Create an Email Template:**
	- Go to the "Email Templates" section and create a new template.
	- Use the following HTML template for a beautiful, romantic design:
	
	```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>Love Message</title>
		<style>
			body {
				font-family: 'Arial', sans-serif;
				background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
				margin: 0;
				padding: 20px;
				min-height: 100vh;
			}
			.container {
				max-width: 600px;
				margin: 0 auto;
				background: rgba(255, 255, 255, 0.95);
				border-radius: 20px;
				padding: 30px;
				box-shadow: 0 10px 30px rgba(0,0,0,0.2);
				border: 2px solid #ff6b9d;
			}
			.header {
				text-align: center;
				margin-bottom: 30px;
			}
			.heart {
				font-size: 48px;
				color: #ff4757;
				margin-bottom: 10px;
			}
			.title {
				color: #2c3e50;
				font-size: 28px;
				font-weight: bold;
				margin: 0;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
			}
			.message {
				background: #f8f9fa;
				border-left: 4px solid #ff6b9d;
				padding: 20px;
				border-radius: 10px;
				margin: 20px 0;
				font-size: 16px;
				line-height: 1.6;
				color: #34495e;
				white-space: pre-line;
			}
			.footer {
				text-align: center;
				margin-top: 30px;
				color: #7f8c8d;
				font-size: 14px;
			}
			.sparkle {
				display: inline-block;
				animation: sparkle 2s infinite;
			}
			@keyframes sparkle {
				0%, 100% { transform: scale(1); opacity: 1; }
				50% { transform: scale(1.2); opacity: 0.7; }
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<div class="heart">💖</div>
				<h1 class="title">A Message of Love</h1>
			</div>
			
			<div class="message">
				{{message}}
			</div>
			
			<div class="footer">
				<p>Sent with all my love 💕</p>
				<p class="sparkle">✨</p>
				<p><a href="https://github.com/jayanthgopala" style="color: #ff6b9d; text-decoration: none;">Designed by JAYANTH GOPALA V</a></p>
			</div>
		</div>
	</body>
	</html>
	```
	
	- In the template editor, set the Subject to: "A Special Message for You 💌"
	- **Important:** In the "To Email" field of the template, enter `{{to_email}}` to enable dynamic recipients
	- **CRITICAL:** Make sure `{{message}}` appears in the template body where you want the message content to be displayed. The template will not work without this placeholder!

## Email Message Formats

The app sends two types of romantic emails:

### 1. **"Yes" Response Email:**
```
💖 LOVE ALERT! 💖

SHE SAID YES! ❤️

Your special someone just accepted your proposal!
Time: [timestamp]

Congratulations! Your love story continues... 🌹
```

### 2. **Custom Message Email:**
```
💌 A Sweet Message from Your Love 💌

"[user's custom message]"

Sent with all the love in her heart ❤️
Time: [timestamp]

Your special someone wanted you to know how much you mean to them! 🌹
```

4. **Get your Public Key, Service ID, and Template ID:**
	- Find these in the EmailJS dashboard under Account > API Keys and in your service/template settings.
	- **Note:** All emails from the app will be sent to `youremial@gmail.com`.
5. **Create a `.env` file in your project root:**
	```env
	VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
	VITE_EMAILJS_SERVICE_ID=your_service_id_here
	VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
	```

---

##  Using URL Parameters for Custom Recipients

You can customize the recipient email by adding an `email` parameter to the URL. If no email is provided, the app will use the default recipient: `develouperforlove@gmail.com`.

### Examples:

**With custom email:**
```
https://yourdomain.com/?email=love@example.com
http://localhost:5173/?email=partner@gmail.com
```

**Without email parameter (uses default):**
```
https://yourdomain.com/
```

**Important:** Make sure your EmailJS template has `{{to_email}}` set as the "To Email" field for dynamic recipients to work.

This allows you to share personalized links where the proposal emails are sent directly to the intended recipient!

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

### Common Issues:
- **Blank messages in emails:** Make sure your EmailJS template includes `{{message}}` in the template body, not just the subject
- **Emails not sending:** Verify your EmailJS service is properly configured and connected
- **Template not working:** Double-check that `{{to_email}}` is set in the "To Email" field of your template

**Debugging:** Open browser developer tools (F12) and check the Console tab when sending emails to see detailed error messages.

---

Enjoy spreading love! 🌹
# [MADE SPECIALL FOR YOU BY JAYANTH GOPALA V](https://github.com/jayanthgopala)