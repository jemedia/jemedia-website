# JEM Media Landing Page

This is the landing page infrastructure for JEM Media, built with Next.js and modern web technologies.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

## Development

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/jemedia/jemedia-website.git
cd jemedia-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Quality Checks

This project uses several tools to ensure code quality:

- **TypeScript** for static type checking
- **ESLint** for code linting
- **Prettier** for code formatting

These checks run automatically on pull requests through GitHub Actions.