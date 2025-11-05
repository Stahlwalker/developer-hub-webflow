# Webflow Developer Hub

A modern, visually appealing developer hub microsite for Webflow, inspired by Stripe.dev and Cloudflare Sandbox.

## Features

- **Modern Design**: Clean, gradient animations and glass-morphism effects
- **Dark Mode**: Fully functional dark/light theme toggle with system preference detection
- **Interactive API Playground**: Test Webflow API endpoints in real-time
- **Code Snippets**: Syntax-highlighted code examples with copy functionality
- **Search**: Quick search across documentation and resources
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for delightful interactions

## Tech Stack

- **Vite**: Fast build tool and dev server
- **React**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animations
- **Prism React Renderer**: Syntax highlighting
- **Lucide React**: Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Main navigation with dark mode toggle
│   ├── Hero.tsx        # Hero section with animations
│   ├── Documentation.tsx # Documentation grid
│   ├── APIPlayground.tsx # Interactive API testing
│   ├── CodeSnippet.tsx  # Syntax-highlighted code blocks
│   ├── SearchBar.tsx    # Search functionality
│   ├── Examples.tsx     # Code examples section
│   └── Footer.tsx       # Footer component
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark mode context
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## Key Features Implemented

### 1. Dark Mode
- Persistent theme storage in localStorage
- Respects system preferences
- Smooth transitions between themes
- Toggle in navigation bar

### 2. Interactive API Playground
- Multiple endpoint selection
- Real-time request configuration
- Response preview with syntax highlighting
- Code examples for each endpoint

### 3. Code Snippets
- Syntax highlighting with Prism
- Line numbers
- Copy to clipboard functionality
- Support for multiple languages
- Dark/light theme aware

### 4. Search
- Real-time search across documentation
- Categorized results (docs, API, guides)
- Keyboard shortcuts support
- Click-outside to close

### 5. Modern UI
- Gradient animations
- Glass-morphism effects
- Smooth transitions
- Floating elements
- Hover effects

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
- Update API endpoints in `src/components/APIPlayground.tsx`
- Modify documentation sections in `src/components/Documentation.tsx`
- Add more examples in `src/components/Examples.tsx`

## Development

The site runs on `http://localhost:5173/` by default.

Hot Module Replacement (HMR) is enabled, so changes appear instantly.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

## Deploy

This site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

## License

MIT
