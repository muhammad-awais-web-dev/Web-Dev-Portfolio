# Full-Stack Portfolio Application

A modern full-stack web application built with React (Vite) + Express, configured as a monorepo and deployed on Vercel.

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Express.js (Serverless)
- **Deployment**: Vercel
- **Monorepo**: npm workspaces

## 📁 Project Structure

```
Web-Dev-Portfolio/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
├── server/                 # Express backend
│   ├── api/
│   │   └── index.js       # Main API handler
│   ├── package.json
│   └── .env.example
├── vercel.json            # Vercel deployment config
├── package.json           # Root package.json
└── README.md
```

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```powershell
   git clone <your-repo-url>
   cd Web-Dev-Portfolio
   ```

2. **Install all dependencies**
   ```powershell
   npm install
   npm install --workspace=client
   npm install --workspace=server
   ```

3. **Set up environment variables**
   
   For the server:
   ```powershell
   Copy-Item server\.env.example server\.env
   ```
   
   For the client:
   ```powershell
   Copy-Item client\.env.example client\.env
   ```

4. **Start development servers**
   ```powershell
   # Run both frontend and backend concurrently
   npm run dev
   
   # Or run them separately:
   # Terminal 1 - Frontend
   npm run client:dev
   
   # Terminal 2 - Backend
   npm run server:dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api

## 📡 API Endpoints

- `GET /api` - Welcome message
- `GET /api/health` - API health check
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Contact form submission

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```powershell
   vercel login
   ```

3. **Deploy**
   ```powershell
   vercel
   ```

4. **Deploy to production**
   ```powershell
   vercel --prod
   ```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub**
   ```powershell
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure Environment Variables** (if needed)
   - In Vercel Dashboard → Settings → Environment Variables
   - Add any necessary environment variables

### Important Vercel Configuration

The `vercel.json` file is configured to:
- Build the React frontend as a static site
- Run the Express backend as serverless functions
- Route all `/api/*` requests to the backend
- Serve all other requests from the frontend

## 🔧 Build Commands

```powershell
# Build frontend only
npm run client:build

# Build backend only
npm run server:build

# Build both
npm run build
```

## 📝 Adding New API Endpoints

Edit `server/api/index.js`:

```javascript
// Example: Add a new endpoint
app.get('/api/about', (req, res) => {
  res.json({ 
    name: 'Your Name',
    bio: 'Your bio',
    skills: ['React', 'Node.js', 'Express']
  });
});

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  // Add your logic here
  res.json({ success: true, message: 'Subscribed!' });
});
```

## 🎨 Customizing the Frontend

The frontend uses React with Vite. Key files:
- `client/src/App.jsx` - Main application component
- `client/src/App.css` - Application styles
- `client/vite.config.js` - Vite configuration

## 🔒 Environment Variables

### Server (.env)
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Client (.env)
```
VITE_API_URL=http://localhost:5000
```

## 🐛 Troubleshooting

### API calls not working in production
- Ensure `vercel.json` routes are configured correctly
- Check that API paths start with `/api`

### CORS errors
- Update CORS_ORIGIN in server environment variables
- In production, Vercel handles routing automatically

### Build failures
- Clear node_modules and reinstall: `rm -rf node_modules; npm install`
- Check Node.js version compatibility

## 📦 Package Scripts

Root level:
- `npm run dev` - Run both client and server in development
- `npm run build` - Build both client and server
- `npm run client:dev` - Run client only
- `npm run server:dev` - Run server only

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for your portfolio!

---

Built with ❤️ using React, Vite, Express, and Vercel
