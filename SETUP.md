# Backend Setup Guide — Contact Form (MongoDB + Email)

This adds a real backend to your portfolio's contact form. Submissions are saved to a local
MongoDB database and you get notified by email (sent from your Gmail account to your own inbox).

## What changed
- **New `server/` folder** — a small Express API with one endpoint: `POST /api/contact`
- **`src/App.tsx`** — the contact form now sends real data to that endpoint instead of faking success
- **`vite.config.ts`** — added a dev proxy so the frontend's `/api/...` calls reach the backend during `npm run dev`

## 1. Install MongoDB Community Server locally
1. Download it from the official MongoDB site (search "MongoDB Community Server download") and install with defaults.
2. During/after install, make sure the **MongoDB service is running** — on Windows it's usually installed as a Windows Service called `MongoDB` and starts automatically. You can check via Services (`services.msc`).
3. You don't need to create the database manually — Mongoose will create `portfolio` and the `contacts` collection automatically on first insert.

## 2. Set up the backend
```bash
cd server
npm install
copy .env.example .env      # Windows
# or: cp .env.example .env   (Mac/Linux)
```

Open `server/.env` and fill in:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_APP_PASSWORD=your16characterapppassword
RECEIVER_EMAIL=inderkumarkulkarni@gmail.com
CLIENT_ORIGIN=http://localhost:5173
```

### Getting a Gmail App Password (required — your normal password won't work)
1. Go to your Google Account → **Security**.
2. Turn on **2-Step Verification** if it isn't already on.
3. Search for **App Passwords** in account settings, create one named "Portfolio," and copy the 16-character code.
4. Paste it as `EMAIL_APP_PASSWORD` (no spaces).

`EMAIL_USER` is the Gmail account that *sends* the email. `RECEIVER_EMAIL` is where it lands — you can set both to your own address.

## 3. Run everything
You need **two terminals** open at the same time:

**Terminal 1 — backend:**
```bash
cd server
npm run dev
```
You should see `MongoDB connected -> ...` and `Server listening on http://localhost:5000`.

**Terminal 2 — frontend (from the project root):**
```bash
npm install
npm run dev
```
Open the printed `http://localhost:5173` URL, scroll to the contact form, and submit it. You should see "Sending..." then "Message Sent!", get an email, and the entry will be saved in MongoDB.

## 4. Verify data landed in MongoDB (optional)
If you install **MongoDB Compass** (a free GUI, downloaded alongside MongoDB), connect to `mongodb://localhost:27017`, open the `portfolio` database, and check the `contacts` collection after submitting the form.

## Troubleshooting
- **"MongoDB connection failed"** — the MongoDB service isn't running. Start it from `services.msc` (Windows) or `brew services start mongodb-community` (Mac).
- **Email never arrives** — double check `EMAIL_APP_PASSWORD` is the App Password, not your Gmail login password, and that 2-Step Verification is enabled.
- **Form shows a red error message** — open the backend terminal; the real error is logged there.
- **CORS error in browser console** — confirm `CLIENT_ORIGIN` in `.env` matches the URL Vite printed (default `http://localhost:5173`).

## Deploying later
When you're ready to put this online, you'll eventually want MongoDB Atlas (free tier) instead of local MongoDB, and to host `server/` somewhere like Render or Railway. Happy to walk through that when you get there — local-first is the right call while you're still building.
