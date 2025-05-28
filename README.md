# 🐱 Markdown PurrViewer

*A soothing, eye-friendly markdown editor and A4 previewer with live rendering*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Catppuccin](https://img.shields.io/badge/theme-catppuccin-f5c2e7)](https://github.com/catppuccin/catppuccin)

## ✨ Features

### 🎨 **Three Beautiful Themes**
- **Light Mode**: Clean, professional appearance for daytime writing
- **Dark Mode**: Easy on the eyes for late-night documentation sessions  
- **Catppuccin Mocha**: Soothing pastel theme with perfect contrast ratios

### 📄 **A4 Format Preview**
- **Perfect Pagination**: Smart content splitting that respects text flow
- **Print-Ready**: True A4 dimensions (210mm × 297mm) for professional documents
- **Page Numbering**: Automatic page numbers for multi-page documents
- **Heading Page Breaks**: Force new pages at specific heading levels (#, ##, ###)

### ⚡ **Live Features**
- **Real-time Preview**: See changes instantly as you type
- **Auto-scroll Sync**: Optional synchronized scrolling between editor and preview
- **Math Support**: LaTeX math rendering with KaTeX
- **Syntax Highlighting**: Code blocks with highlight.js support
- **Word Count**: Live statistics showing words, characters, and lines

### 🎯 **Smart Controls**
- **Layout Flexibility**: Switch between editor-only, preview-only, or split view
- **Zoom Controls**: Adjust preview size for comfortable viewing
- **Export Options**: Download as HTML or print to PDF
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js 14 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/crypticbae/markdown-purrviewer.git
cd markdown-purrviewer

# Install dependencies
npm install

# Start the server
npm start
```

Open your browser and navigate to `http://localhost:3000` to start writing!

## 🎮 Usage Guide

### Basic Writing
1. **Start typing** in the left editor panel
2. **Watch the magic** happen in the real-time preview
3. **Toggle themes** using the header buttons or the floating cat button 🐱

### Advanced Features

#### **Page Break Controls**
Use the dropdown in the preview panel to control heading page breaks:
- **No page breaks**: Continuous flow
- **Break from #**: New page for all headings
- **Break from ##**: New page for ## and ### headings only
- **Break from ###**: New page for ### headings only

#### **Auto-scroll Sync**
Toggle the sync checkbox in the preview controls to enable/disable automatic scrolling synchronization between editor and preview.

#### **Theme Switching**
- **Light/Dark**: Use the sun/moon icons in the header
- **Catppuccin**: Click the floating cat button (🐱) in the bottom-left corner

### Markdown Support

Full GitHub Flavored Markdown support including:

```markdown
# Headers (H1-H6)
**Bold** and *italic* text
`inline code` and code blocks
> Blockquotes
- Lists (bulleted and numbered)
[Links](https://example.com)
![Images](image.jpg)
| Tables | Are | Supported |
|--------|-----|-----------|
| Row 1  | A   | B         |

Math equations: $E = mc^2$

Block math:
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

## 🏗️ Technical Stack

- **Backend**: Node.js with Express and Socket.io for real-time updates
- **Frontend**: Vanilla JavaScript with modern CSS Grid and Flexbox
- **Markdown**: marked.js for parsing with custom renderer
- **Math**: KaTeX for LaTeX math rendering
- **Syntax**: highlight.js for code highlighting
- **Themes**: Custom CSS with Catppuccin color palette

## 🎨 Theme Details

### Catppuccin Mocha Palette
The Catppuccin theme uses the beautiful Mocha variant with these signature colors:
- **Mauve** (`#cba6f7`): Primary accent and headings
- **Blue** (`#89b4fa`): Links and secondary elements  
- **Base** (`#1e1e2e`): Main background
- **Mantle** (`#181825`): A4 page background
- **Text** (`#cdd6f4`): Primary text color

## 📱 Responsive Design

Markdown PurrViewer works seamlessly across devices:
- **Desktop**: Full split-pane experience with resizable panels
- **Tablet**: Adaptive layout with touch-friendly controls
- **Mobile**: Optimized single-pane mode with swipe navigation

## 🛠️ Development

### File Structure
```
markdown-purrviewer/
├── public/
│   ├── index.html          # Main application
│   ├── styles.css          # All themes and responsive styles
│   └── script.js           # Client-side functionality
├── server.js               # Express server with Socket.io
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

### Running in Development
```bash
# Install dependencies
npm install

# Start with auto-restart
npm run dev

# Or start normally
npm start
```

The server runs on port 3000 and automatically reloads when you make changes to the code.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Inspiration & Thanks

- **[@iruzo](https://github.com/iruzo)** - Thank you for the inspiration and ideas that helped shape this project!
- **[@catppuccin](https://github.com/catppuccin/catppuccin)** - For the absolutely gorgeous Catppuccin Mocha theme that makes writing a joy for the eyes 😸

### Open Source Libraries

- [marked.js](https://marked.js.org/) - Fast markdown parser and compiler
- [KaTeX](https://katex.org/) - Beautiful math rendering
- [highlight.js](https://highlightjs.org/) - Syntax highlighting for code blocks
- [Socket.io](https://socket.io/) - Real-time bidirectional communication

## 🌟 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 🐛 Issues

If you find any bugs or have feature requests, please create an issue on [GitHub](https://github.com/crypticbae/markdown-purrviewer/issues).

---

<div align="center">

**Made with 💜 and lots of ☕**

*Happy writing! 📝✨*

</div> 