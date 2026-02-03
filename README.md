# Alfa Dashboard

A modern financial dashboard built with Next.js 16, React, and Tailwind CSS.

## Project Structure

```
alfa-dashboard/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css        # Global styles
│
├── src/                    # Source code
│   ├── components/        # React components
│   │   ├── dashboard/    # Dashboard-specific components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Transactions.tsx
│   │   │   ├── DailyLimit.tsx
│   │   │   ├── SavingPlans.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/           # Reusable UI components
│   │   └── FontLoader.tsx
│   └── lib/              # Utility functions
│       └── utils.ts
│
├── public/                # Static assets
├── assets/                # Source assets
└── [config files]        # Configuration files
```

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern dashboard UI with financial metrics
- Responsive design
- Custom fonts (Urbanist, Clash Display)
- Transaction management
- Savings tracking
- Daily limit monitoring

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
