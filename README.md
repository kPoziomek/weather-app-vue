# Vue TypeScript Template

Modern Vue 3 template with TypeScript, Tailwind CSS, and essential development tools.

## Features
- ⚡️ Vue 3 + Vite
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🌙 Dark mode support
- 📁 Path aliases (@/)
- 🧹 ESLint + Prettier
- 📱 Responsive ready
- 🛣️ Vue Router configured

## Getting Started

```bash
# Create new repository from this template
# Click the "Use this template" button above

# Clone your new repository
git clone [your-repo-url]

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start dev server
pnpm dev
```
```tree
src/
├── assets/          # Static assets
├── components/      # Reusable components
│   ├── ui/         # UI components
│   └── features/   # Feature components
├── composables/     # Vue composables
├── views/          # View components
├── router/         # Vue Router config
├── utils/          # Utility functions
└── types/          # TypeScript types
```
### Available Scripts

- pnpm dev - Start development server
- pnpm build - Build for production
- pnpm preview - Preview production build
- pnpm lint - Run ESLint
- pnpm format - Format code with Prettier
- pnpm type-check - Run TypeScript checks

### Development Tools

- 🛠️ WebStorm - Recommended IDE
- 🔍 ESLint - Code linting
- ✨ Prettier - Code formatting
- 🎯 TypeScript - Type checking

### Customization

- Tailwind configuration: tailwind.config.js
- ESLint rules: eslint.config.js
- TypeScript configuration: tsconfig.json
- Vite configuration: vite.config.ts

### Best Practices

- Use Composition API with Vue 3
- Follow Vue 3 style guide
- Maintain type safety
- Use Tailwind utilities for styling
- Keep components small and focused
