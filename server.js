const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs').promises;

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// File upload configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Store active markdown content
let currentMarkdown = `# Welcome to Markdown A4 Previewer

This is a beautiful markdown previewer with **A4 format support** for creating professional documents.

## Features

- 📄 **A4 Format**: Perfect paper-like preview
- 🎨 **Live Preview**: Real-time markdown rendering  
- 🌙 **Dark Mode**: Easy on the eyes
- 🖨️ **Print Ready**: Optimized for printing
- 📱 **Responsive**: Works on all devices
- ⚡ **Fast**: Instant updates via WebSocket

## Getting Started

1. Type your markdown in the editor
2. See live preview on the right
3. Toggle A4 format for document view
4. Print or export to PDF

> Start editing to see the magic happen!

### Code Example

\`\`\`javascript
function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet("World"));
\`\`\`

### Math Support

When $a \\ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$:

$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$

---

**Happy writing!** 🚀
`;

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/content', (req, res) => {
  res.json({ content: currentMarkdown });
});

app.post('/api/content', (req, res) => {
  const { content } = req.body;
  currentMarkdown = content;
  
  // Broadcast to all connected clients
  io.emit('content-update', { content: currentMarkdown });
  
  res.json({ success: true });
});

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const content = req.file.buffer.toString('utf-8');
    currentMarkdown = content;
    
    // Broadcast to all connected clients
    io.emit('content-update', { content: currentMarkdown });
    
    res.json({ success: true, content: currentMarkdown });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

app.get('/api/download', (req, res) => {
  res.setHeader('Content-Type', 'text/markdown');
  res.setHeader('Content-Disposition', 'attachment; filename="document.md"');
  res.send(currentMarkdown);
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  // Send current content to new client
  socket.emit('content-update', { content: currentMarkdown });
  
  socket.on('content-change', (data) => {
    currentMarkdown = data.content;
    // Broadcast to all other clients
    socket.broadcast.emit('content-update', { content: currentMarkdown });
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Markdown A4 Previewer running on http://localhost:${PORT}`);
  console.log(`📄 Open your browser and start writing beautiful documents!`);
}); 