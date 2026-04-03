# Hotel Management Booking

A comprehensive React application for managing bookings, cabins, and guests at a wilderness retreat. Built with modern web technologies for a seamless user experience.

## 🎯 Features

- **User Authentication**: Secure login, signup, profile updates, and password management
- **Cabin Management**: Full CRUD operations for cabin listings (create, edit, delete)
- **Booking System**: Complete booking lifecycle with check-in/check-out functionality
- **Dashboard Analytics**: Interactive charts and statistics for business insights
- **Responsive Design**: Mobile-friendly UI built with styled-components
- **File Uploads**: Support for image uploads and client-side state management
- **Data Visualization**: Charts for sales, duration, and activity tracking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or latest LTS version)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd the-wild-oasis
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup

This project uses Supabase for backend services. Create a `.env.local` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=https://kayzjwnvzupfvvuyqxnm.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_NFTtlSkO24slQQCgLNFPkg_2IHDa1hM
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

```bash
npm run build
npm run preview
```

## 🛠️ Project Structure

```
src/
├── components/          # Reusable UI components
├── features/            # Feature-specific logic and custom hooks
│   ├── authentication/  # Login, signup, user management
│   ├── bookings/        # Booking-related components and hooks
│   ├── cabins/          # Cabin management features
│   ├── check-in-out/    # Check-in/check-out functionality
│   ├── dashboard/       # Dashboard and analytics
│   └── settings/        # App settings and configuration
├── hooks/               # Custom React hooks
├── pages/               # Route-level page components
├── services/            # API services and Supabase integration
├── styles/              # Global styles and themes
├── ui/                  # UI component library
└── utils/               # Helper functions and utilities
```

## 🧩 Technologies Used

- **Frontend**: React 18 with hooks and functional components
- **Build Tool**: Vite 4 for fast development and optimized builds
- **Styling**: styled-components for component-scoped CSS
- **State Management**: TanStack React Query for server state
- **Backend**: Supabase (PostgreSQL database, authentication, real-time)
- **Routing**: React Router for client-side navigation
- **Charts**: Recharts for data visualization
- **Code Quality**: ESLint for linting and code standards

## 📊 Key Components

- **Authentication Flow**: Secure user login and registration
- **Booking Management**: View, create, and manage reservations
- **Cabin Inventory**: Manage accommodation listings
- **Dashboard**: Real-time statistics and business metrics
- **Check-in/Out System**: Streamlined guest arrival/departure process

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

This project follows standard React and JavaScript best practices. Please run `npm run lint` before committing changes.

## 🚀 Deployment

The app can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages. Ensure environment variables are set in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


