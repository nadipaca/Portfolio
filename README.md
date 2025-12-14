# Charishma Nadipalli - Portfolio

A high-impact, recruiter-focused portfolio showcasing full-stack software development capabilities, system design depth, and production experience.

## Features

- **Hero Section**: Clear value proposition with tech stack badges and CTA buttons
- **Proof of Impact**: Metrics-driven section highlighting production achievements
- **Featured Projects**: 4 production projects with architecture details
- **Architecture & Systems Thinking**: Core principles for building production systems
- **Experience Snapshot**: Condensed experience with metrics and impact
- **Tech Stack Radar**: Visually grouped skills by category
- **Responsive Design**: Mobile-first, fast-loading, minimal animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Add Project Images and Videos

1. Create a `public/projects/` folder in your project root
2. Add your project media files with these exact names:
   - `healthcare-ai.jpg` and `healthcare-ai.mp4`
   - `playground-app.jpg` and `playground-app.mp4`
   - `code-review.jpg` and `code-review.mp4`
   - `novamart.jpg` and `novamart.mp4`

3. The portfolio will automatically display images/videos when they're available
4. If media files are missing, placeholder gradients will be shown

### Update Links

Edit the following files to update social links and resume:
- `components/sections/hero.tsx` - Update GitHub, LinkedIn, and Resume links
- `components/sections/footer.tsx` - Update contact email and social links

### Update Projects

Edit `components/sections/featured-projects.tsx` to modify project details, add demo links, or update media paths.

### Update Experience

Edit `components/sections/experience.tsx` to update work experience.

### Update Metrics

Edit `components/sections/proof-of-impact.tsx` to update impact metrics.

## Deployment

This portfolio can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

For Vercel:
```bash
npm install -g vercel
vercel
```

## License

MIT

