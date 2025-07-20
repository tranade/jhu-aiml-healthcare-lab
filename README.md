# JHU AIML Healthcare Lab Website

A modern, responsive website for the Machine Learning, AI, and Healthcare Lab at Johns Hopkins University, led by Professor Suchi Saria. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Inspired by MIT CSAIL and Replicate websites
- **Responsive**: Optimized for all device types
- **Scalable Architecture**: Built with Next.js 14 and TypeScript
- **Performance Optimized**: Fast loading with optimized images and animations
- **SEO Friendly**: Comprehensive metadata and structured data
- **Accessible**: WCAG compliant design
- **Interactive**: Smooth animations and hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jhu-aiml-healthcare-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
jhu-aiml-healthcare-lab/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation
│   ├── ResearchAreas.tsx  # Research areas
│   ├── Team.tsx           # Team members
│   ├── Publications.tsx   # Publications
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue gradient (`primary-600` to `accent-600`)
- Secondary: Gray scale
- Accent: Purple gradient

### Content
Update the content in each component file:
- `components/Hero.tsx`: Main headline and description
- `components/ResearchAreas.tsx`: Research areas and projects
- `components/Team.tsx`: Team member information
- `components/Publications.tsx`: Publication data
- `components/Contact.tsx`: Contact information

### Images
Replace placeholder images in the `public/` directory:
- Lab photos
- Team member photos
- Research project images

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style

The project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, contact:
- Email: aiml-healthcare@jhu.edu
- Lab Website: [aiml-healthcare.jhu.edu](https://aiml-healthcare.jhu.edu)

## 🙏 Acknowledgments

- Design inspiration from MIT CSAIL and Replicate
- Icons from Lucide React
- Fonts from Google Fonts
- Built with Next.js and Tailwind CSS 