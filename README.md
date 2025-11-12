# Software Developer Portfolio

A modern, responsive dark-theme portfolio website showcasing professional projects, skills, and experience. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to view your portfolio.

## 📦 Project Structure

```
src/
├── components/       # React components (Hero, About, Skills, Projects, etc.)
├── data/            # Project data and content (CMS-like structure)
├── assets/          # Images and media files
├── pages/           # Page components
└── index.css        # Design system and global styles
```

## ✨ Features

- **Modern Dark Theme** with cyan neon accents
- **Fully Responsive** - mobile-first design
- **SEO Optimized** with proper meta tags and semantic HTML
- **Accessible** - ARIA labels and keyboard navigation
- **Smooth Animations** - micro-interactions and transitions
- **Contact Form** with validation
- **Project Showcase** with filterable gallery
- **Skills Section** with animated proficiency bars
- **Testimonials** section
- **Resume Download** functionality

## 🎨 Customization

### Edit Projects

Edit `src/data/projects.ts` to add, remove, or modify your projects:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description...",
    tags: ["Featured", "Full-Stack"],
    techStack: ["React", "Node.js"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    featured: true,
  },
  // Add more projects...
];
```

### Design System

The design system is defined in `src/index.css` and `tailwind.config.ts`. All colors use HSL format and semantic tokens:

- `--background`: Main background color
- `--foreground`: Text color
- `--primary`: Accent color (cyan)
- `--card`: Card background
- `--muted`: Muted elements

### Update Content

1. **Personal Info**: Edit `src/components/Hero.tsx`
2. **About Section**: Edit `src/components/About.tsx`
3. **Skills**: Edit `src/components/Skills.tsx`
4. **Contact Info**: Edit `src/components/Contact.tsx`

## 🛠️ Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color scheme (dark theme with cyan accents)
- Alt text on all images

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

### Deploy Options

- **Lovable**: Click "Publish" in the Lovable editor
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## 📝 SEO

The site includes:
- Meta description tags
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Image alt attributes

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this template for your portfolio.

## 🙋‍♂️ Support

For questions or issues, please open an issue on GitHub or contact via the portfolio contact form.

---

Built with ❤️ using Lovable AI
