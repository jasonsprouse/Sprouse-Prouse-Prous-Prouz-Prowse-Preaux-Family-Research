# Sprouse-Prouse-Prous-Prouz-Prowse-Preaux-Family-Research

Family Lineage Research - A Next.js static site showcasing eight centuries of the Sprouse-Prouse family's commercial history.

## Overview

This repository contains a comprehensive digital presentation of the Sprouse-Prouse family research, built as a Next.js static site with interactive maps, timelines, and genealogical data visualization.

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/jasonsprouse/Sprouse-Prouse-Prous-Prouz-Prowse-Preaux-Family-Research.git
cd Sprouse-Prouse-Prous-Prouz-Prowse-Preaux-Family-Research
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

To create a static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the main branch. The deployment workflow:

1. Builds the Next.js site as a static export
2. Uploads the generated files to GitHub Pages
3. Makes the site available at the GitHub Pages URL

### Manual Deployment

If you need to deploy manually:

1. Build the site: `npm run build`
2. The `out/` directory contains all static files
3. Deploy the contents of `out/` to any static hosting service

## Features

- **Interactive Timeline**: Four eras of family history with responsive design
- **Migration Map**: Leaflet.js-powered map showing geographical movements
- **Relationship Web**: Interactive family alliance diagram
- **Biographical Register**: Expandable accordion with genealogical evidence
- **Document Viewer**: Modal system for viewing historical documents
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Next.js 15**: React framework with static site generation
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Leaflet.js**: Interactive maps
- **Vercel**: Deployment and hosting

## Project Structure

```
src/
├── app/
│   ├── data.ts          # Family and historical data
│   ├── globals.css      # Global styles and Tailwind
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── ...

.github/
└── workflows/
    └── nextjs.yml       # GitHub Actions deployment workflow
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build: `npm run build`
5. Submit a pull request

## License

MIT License - see LICENSE file for details
