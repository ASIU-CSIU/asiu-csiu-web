# ASIU-CSIU Web Monorepo

A comprehensive web platform serving the Advocates for Science @ IU (ASIU) and Concerned Scientists @ IU (CSIU) communities. This monorepo contains three interconnected applications built with modern web technologies.

## 🌟 Overview

This project provides digital infrastructure for student organizations, featuring public websites for community engagement and a content management system for easy updates.

### Applications

- **🎓 ASIU Website** - Public site for Advocates for Science @ IU
- **💻 CSIU Website** - Academic-focused platform for Concerned Scientists @ IU
- **⚙️ CMS System** - Content management system for both websites

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download here](https://nodejs.org/))
- **Git** ([Download here](https://git-scm.com/downloads))
- **PostgreSQL** (for database)

### Getting Started

1. **Clone and setup:**
   ```bash
   git clone https://github.com/s4ngl/asiu-csiu-web-monorepo.git
   cd asiu-csiu-web-monorepo
   npm install
   ```

2. **Start development:**
   ```bash
   # Run ASIU website
   npm run dev:asiu

   # Run CSIU website
   npm run dev:csiu

   # Run CMS
   npm run dev:cms

   # Run all applications
   npm run dev
   ```

3. **Open in browser:**
   - ASIU: `http://localhost:3000`
   - CSIU: `http://localhost:3001`
   - CMS: `http://localhost:3002`

## 📚 Documentation

**New to the project?** Start with our [Onboarding Guide](/docs/onboarding.md)

### For Contributors
- 📖 [Onboarding Guide](/docs/onboarding.md) - Step-by-step setup for new contributors
- 🤝 [Contributing Guidelines](/CONTRIBUTING.md) - How to contribute code
- ❓ [FAQ](/docs/faq.md) - Common questions and solutions
- 🏗️ [Architecture Guide](/docs/architecture.md) - Technical system overview

### For Maintainers
- 👥 [Maintainers Guide](/MAINTAINERS.md) - Current team and contacts
- 🔧 [Admin Guide](/docs/admin-guide.md) - Infrastructure management
- 🚀 [Deployment Guide](/docs/deployment.md) - Deploy and manage releases
- 🌐 [Domain Configuration](/docs/domain-config.md) - DNS and domain setup
- ⚙️ [Environment Setup](/docs/env-setup.md) - Environment variables and config

### Project Information
- 📋 [Changelog](/docs/changelog.md) - Project updates and version history
- 📜 [Code of Conduct](/CODE_OF_CONDUCT.md) - Community guidelines
- ⚖️ [License](/LICENSE.md) - Project license

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library

### Backend & Infrastructure
- **Node.js** - Runtime environment
- **PostgreSQL** - Database
- **NextAuth.js** - Authentication
- **AWS S3** - File storage
- **Vercel** - Hosting and deployment

### Development Tools
- **Turborepo** - Monorepo management
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🏗️ Project Structure

```
asiu-csiu-web-monorepo/
├── apps/
│   ├── asiu/              # ASIU website
│   ├── csiu/              # CSIU website
│   └── cms/               # Content management system
├── packages/
│   ├── ui/                # Shared React components
│   ├── eslint-config/     # Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
├── docs/                  # Documentation
└── README.md              # This file
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start all apps in development mode
npm run dev:asiu         # Start ASIU website only
npm run dev:csiu         # Start CSIU website only
npm run dev:cms          # Start CMS only

# Building
npm run build            # Build all applications
npm run build:asiu       # Build ASIU website only
npm run build:csiu       # Build CSIU website only
npm run build:cms        # Build CMS only

# Code Quality
npm run lint             # Run ESLint on all apps
npm run format           # Format code with Prettier
npm run check-types      # Run TypeScript type checking
```

## 🤝 Contributing

We welcome contributions from students and developers of all skill levels!

1. **Read our guides:**
   - [Onboarding Guide](/docs/onboarding.md) for setup instructions
   - [Contributing Guidelines](/CONTRIBUTING.md) for development workflow
   - [FAQ](/docs/faq.md) for common questions

2. **Find an issue to work on:**
   - Look for `good first issue` labels for beginners
   - Check `help wanted` labels for contribution opportunities

3. **Get help:**
   - Ask questions in GitHub issues
   - Contact the lead maintainer: [Sky Angeles](/MAINTAINERS.md) (skyangel@iu.edu)
   - Check our [Maintainers Guide](/MAINTAINERS.md) for contact information

## 🏫 About the Organizations

### ASIU (Advocates for Science @ IU)
A student-led organization at Indiana University that promotes scientific integrity and evidence-based decision-making. ASIU bridges the gap between research and policy by engaging in science advocacy, community engagement, and educational initiatives to advance science policy and create a better future.

### CSIU (Concerned Scientists @ IU)
A coalition of Indiana University faculty, staff, and students dedicated to strengthening the essential role of science and evidence-based decision-making at all levels. CSIU focuses on promoting accurate representation of science in media and education, engaging with the public to communicate science, encouraging scientists' participation in policy-making, and supporting continued federal funding for independent scientific research.

## 📞 Support & Contact

- **Technical Issues:** Create a [GitHub Issue](https://github.com/s4ngl/asiu-csiu-web-monorepo/issues)
- **General Questions:** See our [FAQ](/docs/faq.md)
- **Team Contact:** Check [Maintainers Guide](/MAINTAINERS.md)
- **Security Issues:** Contact maintainers privately

## 📄 License

This project is licensed under the [MIT License](/LICENSE.md) - see the file for details.

## 🙏 Acknowledgments

- Built with [Turborepo](https://turborepo.com/) for monorepo management
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Hosted on [Vercel](https://vercel.com/) for reliable deployment
- Thanks to all [contributors](/MAINTAINERS.md) and community members

---

**Getting Started?** 👉 Check out our [Onboarding Guide](/docs/onboarding.md)
**Need Help?** 👉 See our [FAQ](/docs/faq.md) or [create an issue](https://github.com/s4ngl/asiu-csiu-web-monorepo/issues)

---
*Last updated: December 2024 | Maintained by [Sky Angeles](/MAINTAINERS.md) (s4ngl)*
