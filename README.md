# Bhimesh Patil - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a Notion-like minimalist design.

## Features

- 🎨 Modern, minimalist design with dark/light theme toggle
- 📱 Fully responsive across all devices
- 🌍 Visitor tracking with Discord notifications
- 📄 Resume download/view functionality
- 🚀 Fast performance with Vite

## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   
   Create a `.env` file in the root directory with your Discord webhook URL:
   ```env
   VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
   ```
   
   **To get a Discord webhook URL:**
   1. Go to your Discord server
   2. Right-click on a channel → Edit Channel → Integrations → Webhooks
   3. Create a new webhook and copy the URL
   4. Replace `YOUR_WEBHOOK_ID` and `YOUR_WEBHOOK_TOKEN` with your actual values

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_DISCORD_WEBHOOK_URL` | Discord webhook URL for visitor tracking | Yes |

## Security

- The `.env` file is automatically ignored by Git to prevent exposing sensitive information
- Never commit your actual Discord webhook URL to version control
- Use environment variables for all sensitive configuration

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: Font Awesome
- **Deployment**: Vercel/Netlify ready
