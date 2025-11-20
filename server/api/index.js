import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Portfolio API' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Sample API endpoints - replace with your actual API logic
app.get('/api/projects', (req, res) => {
  res.json({
    projects: [
      { id: 1, name: 'Project 1', description: 'Description 1', tech: ['React', 'Node.js'] },
      { id: 2, name: 'Project 2', description: 'Description 2', tech: ['Vue', 'Express'] }
    ]
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Add your email/contact form logic here
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ success: true, message: 'Message received!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// For Vercel serverless deployment
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
