# F1 Miami Dashboard 🏁🌴

A stunning Formula 1 data dashboard with Miami's neon-soaked aesthetic, built using Express.js, EJS, and the Jolpica F1 API (Ergast replacement).

![F1 Miami Dashboard](https://img.shields.io/badge/F1-Miami%20Dashboard-FF6B9D?style=for-the-badge&logo=formula1&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

- 🏎️ **Real-time F1 Data** - Current season drivers, circuits, and standings
- 🌴 **Miami Vice Aesthetic** - Neon gradients, glowing effects, and curved borders
- 📱 **Fully Responsive** - Beautiful on desktop, tablet, and mobile
- 🔄 **Live API Integration** - Powered by Jolpica F1 API (Ergast successor)
- ⚡ **Fast & Interactive** - Smooth animations and hover effects
- 🎨 **Modern Design** - Glassmorphism and Miami sunset color palette

## 🚀 Live Demo

Visit the live dashboard: [Your Deployed URL Here]

## 📋 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Design System](#-design-system)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sabaka3560/f1-miami-dashboard.git
   cd f1-miami-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Alternative Installation

If you prefer using different ports:

```bash
# Change port in index.js
const PORT = process.env.PORT || 4000;

# Then run
npm start
```

## 📖 Usage

### Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section and features |
| `/about` | About page with project details |
| `/dashboard/drivers` | Current F1 drivers with detailed cards |
| `/dashboard/circuits` | Racing circuits and locations |
| `/dashboard/standings` | Championship standings table |

### Navigation

- **Floating Navbar** - Always accessible at the top
- **Dropdown Menu** - Access all dashboards quickly
- **Responsive Design** - Works on all screen sizes
- **Smooth Animations** - Cards load with staggered timing

## 📁 Project Structure

```
f1-miami-dashboard/
├── 📄 package.json          # Dependencies and scripts
├── 📄 index.js              # Main Express server
├── 📄 README.md             # Project documentation
├── 📄 .gitignore            # Git ignore rules
│
├── 📁 public/               # Static assets
│   ├── 📁 css/
│   │   └── 📄 style.css     # Miami-themed styling
│   └── 📁 js/
│       └── 📄 main.js       # Interactive JavaScript
│
└── 📁 views/                # EJS templates
    ├── 📁 partials/
    │   ├── 📄 header.ejs    # Navigation and head
    │   └── 📄 footer.ejs    # Footer and scripts
    ├── 📁 dashboards/
    │   ├── 📄 drivers.ejs   # Drivers dashboard
    │   ├── 📄 circuits.ejs  # Circuits dashboard
    │   └── 📄 standings.ejs # Standings dashboard
    ├── 📄 index.ejs         # Home page
    └── 📄 about.ejs         # About page
```

## 🔌 API Endpoints

This project uses the **Jolpica F1 API** (successor to Ergast API):

### Base URL
```
http://api.jolpi.ca/ergast/f1/
```

### Used Endpoints

| Endpoint | Purpose | Response |
|----------|---------|----------|
| `/current/drivers.json` | Current season drivers | Driver information, numbers, nationalities |
| `/current/circuits.json` | Current season circuits | Track names, locations, details |
| `/current/driverStandings.json` | Championship standings | Points, positions, wins |

### Rate Limiting
- **200 requests per hour** (unauthenticated)
- Automatic error handling included
- Caching recommended for production

### Example API Response
```json
{
  "MRData": {
    "DriverTable": {
      "Drivers": [
        {
          "driverId": "verstappen",
          "permanentNumber": "1",
          "code": "VER",
          "givenName": "Max",
          "familyName": "Verstappen",
          "dateOfBirth": "1997-09-30",
          "nationality": "Dutch"
        }
      ]
    }
  }
}
```

## 🎨 Design System

### Color Palette
```css
/* Miami Sunset Gradient */
--miami-coral: #FF6B9D    /* Primary brand color */
--miami-pink: #FF1744     /* Accent highlights */
--miami-purple: #8E24AA   /* Depth and contrast */
--miami-blue: #00BCD4     /* Secondary elements */
--miami-cyan: #00E5FF     /* Interactive elements */
```

### Typography
- **Display Font**: Orbitron (futuristic, F1-inspired)
- **Body Font**: Inter (clean, readable)

### Key Design Elements
- **Glassmorphism** - Translucent backgrounds with blur effects
- **Neon Glows** - Colorful shadow effects on interactive elements
- **Curved Borders** - Rounded corners throughout (border-radius: 20px+)
- **Gradient Text** - Color transitions on headings
- **Floating Effects** - Cards lift on hover with smooth transitions

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 768px)

/* Tablet */
@media (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)
```

## ⚙️ Customization

### Changing Colors
Update CSS variables in `public/css/style.css`:
```css
:root {
  --miami-coral: #YOUR_COLOR;
  --miami-cyan: #YOUR_COLOR;
  /* Add more custom colors */
}
```

### Adding New Dashboards
1. Create new EJS template in `views/dashboards/`
2. Add route in `index.js`
3. Update navigation in `views/partials/header.ejs`

### API Configuration
Change API endpoints in `index.js`:
```javascript
const API_BASE = 'http://api.jolpi.ca/ergast/f1/';
// or use different F1 data source
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-name

# Deploy
git push heroku main
```

### Railway
1. Connect GitHub repository
2. Select Node.js environment
3. Deploy with one click

## 🧪 Development

### Scripts
```bash
npm start       # Production server
npm run dev     # Development with nodemon
npm test        # Run tests (if added)
```

### Environment Variables
```bash
# .env file (optional)
PORT=3000
NODE_ENV=development
API_BASE_URL=http://api.jolpi.ca/ergast/f1/
```

### Adding Features
1. **New API Endpoints**: Add routes in `index.js`
2. **UI Components**: Create reusable EJS partials
3. **Styling**: Follow existing CSS architecture
4. **JavaScript**: Add interactions in `public/js/main.js`

## 🤝 Contributing

I welcome contributions! Here's how to help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple screen sizes
- Update documentation if needed

### Issues & Bug Reports
Please use GitHub Issues for:
- 🐛 Bug reports
- 💡 Feature requests
- 📝 Documentation improvements
- ❓ Questions and support

## 📚 Resources

### F1 Data Sources
- [Jolpica F1 API](http://api.jolpi.ca/ergast/f1/) - Current data source
- [FastF1 Python](https://github.com/theOehrly/Fast-F1) - Advanced F1 analysis
- [Formula 1 Official](https://www.formula1.com/) - Official F1 website

### Design Inspiration
- [Miami Art Deco](https://en.wikipedia.org/wiki/Art_Deco_in_Miami) - Architectural influence
- [Glassmorphism](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9) - Design trend
- [Neon Design](https://dribbble.com/tags/neon) - Color inspiration

### Technical Documentation
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [EJS Templating](https://ejs.co/#docs)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 📄 License


## 🙏 Acknowledgments

- **Jolpica F1 Team** - For maintaining the F1 API
- **Formula 1** - For the amazing sport and data
- **Miami Design Community** - For aesthetic inspiration
- **Express.js Community** - For the robust framework

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/sabaka3560)
- **Email**: your.email@example.com

---

**Built with ❤️ and Miami vibes** 🌴🏁

*If you found this project helpful, please give it a ⭐ star on GitHub!*