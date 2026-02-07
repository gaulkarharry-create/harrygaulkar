# Mitali - Valentine 💕

A beautiful, interactive Valentine's Day project created with React, Vite, and Bootstrap.

## Features

- 🔐 **Password Protected**: Access the special message with a password
- 🎉 **Interactive Elements**: Dynamic confetti celebration and floating hearts
- 🎵 **Music Control**: Toggle background music on/off
- 💌 **Love Quotes**: Rotating romantic quotes with beautiful animations
- 📸 **Photo Slideshow**: Display and navigate through special memories
- 📲 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 💾 **Download PDF**: Save the love letter as a PDF
- 🔗 **Share Link**: Copy the page link to clipboard

## Color Scheme

The project uses an elegant **red and black** color combination to create a sophisticated and passionate atmosphere.

## Technologies Used

- **React 19.2.0**: Modern UI library with hooks
- **Vite**: Lightning-fast build tool
- **Bootstrap 5.3.2**: Responsive CSS framework
- **Canvas Confetti**: Particle animation library
- **html2pdf.js**: PDF generation library
- **React Router**: Client-side routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd Mitali
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Mitali/
├── public/              # Static files
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.jsx    # Home page with greeting
│   │   ├── About.jsx   # About page
│   │   ├── Valentine.jsx # Main interactive valentine
│   │   └── Valentine.css # Styling for valentine page
│   ├── assets/         # Images and media files
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styling
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## Password

The default password to unlock the Valentine's message is: **14Feb2026**

## Customization

### Change the Password

Edit the password check in `src/pages/Valentine.jsx`:

```javascript
if (passwordInput === '14Feb2026') { // Change this
```

### Add Images

Place your images in `src/assets/valentine/` and import them in `src/pages/Valentine.jsx`:

```javascript
import photo1 from '../assets/valentine/image1.jpg'
import photo2 from '../assets/valentine/image2.jpg'
// ... add more images
const images = [photo1, photo2, ...]
```

### Add Background Music

Place your audio file in `src/assets/valentine/` and import it:

```javascript
import music from '../assets/valentine/song.mp3'
// Then in the audio tag:
<audio ref={audioRef} loop>
  <source src={music} type="audio/mpeg" />
</audio>
```

### Customize the Message

Edit the `message` variable in `src/pages/Valentine.jsx` to write your own love letter.

### Customize Quotes

Edit the `romanticQuotes` array in `src/pages/Valentine.jsx` to add your own romantic quotes.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Created with ❤️

## Notes

- This project uses Rolldown Vite for faster builds
- Bootstrap's full CSS is used for responsive design
- Media files should be added manually to the assets folder
- Ensure autoplay permissions are enabled in browser for music

---

**Made with love for someone special.** 💕
