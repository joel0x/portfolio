# Joel Machado - Portfolio Website

A modern, trendy portfolio website built with React and Tailwind CSS showcasing AI engineering projects and expertise.

## Features

- 🎨 Modern, aesthetically pleasing design with glassmorphism effects
- 🌈 Gradient animations and neon color scheme
- 📱 Fully responsive design
- ⚡ Smooth scroll animations
- 🎯 Clean, component-based architecture
- 🎭 Trendy fonts: Space Grotesk, Syne, Instrument Serif, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Metrics.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Typography (Space Grotesk, Syne, Instrument Serif, JetBrains Mono)
- **React Hooks** - State management and effects
- **Intersection Observer API** - Scroll animations

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  'neon': {
    'pink': '#FF006E',
    'blue': '#00F5FF',
    'purple': '#8B5CF6',
    'green': '#10F4B1',
    'orange': '#FF6B35',
  },
  // ...
}
```

### Content

Update project details, skills, and personal information in the respective component files under `src/components/`.

### Contact Information

Update email and LinkedIn links in `src/components/Contact.js`.

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Joel Machado - Generative AI Engineer
