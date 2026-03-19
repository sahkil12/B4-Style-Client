# 👕 B4 Style

A modern fashion e-commerce frontend for **B4 Style**, built with **React**, **Vite**, **Tailwind CSS**, and **Firebase Authentication**.  
The application delivers a modern shopping experience with product browsing, filtering, wishlist and cart management, secure checkout, and role-based dashboard access.

## 🌐 Live Demo
🔗 https://b4-style.vercel.app/

## Overview

B4 Style is the customer facing frontend of the **B4 Style** fashion brand. It focuses on a polished storefront experience with animated landing sections, product discovery tools, authentication flows, protected routes, and dashboard views for both customers and admins.

## Key Features

- **Modern storefront UI** with hero section, categories, featured collections, and promotional content.
- **Product discovery tools** including category filters, size filters, sorting, and search.
- **Product detail pages** with route-based data loading.
- **Wishlist and cart management** for authenticated users.
- **Secure authentication** with Firebase email/password login, Google sign-in, profile updates, and password reset.
- **Checkout flow** with Stripe payment integration.
- **Role-based dashboard** for users and admins, including orders, analytics, users, settings, and product management.
- **SEO support** using reusable meta tag handling.
- **Responsive design** optimized for mobile, tablet, and desktop.

---

## 🖼️ Screenshots

### Home Page
![Home Page](/public/assets/for%20readme/b4-style-home.png)

### Shop Page
![Shop Page](/public/assets/for%20readme/shop%20page.png)

### About Page
![About Page](/public/assets/for%20readme/about%20page.png)

### Contact Page
![Contact Page](/public/assets/for%20readme/contact%20page.png)

### Search bar
![Search bar](/public/assets/for%20readme/searchbar.png)

### Product Details Page
![Product Details Page](/public/assets/for%20readme/product%20details%20page.png)

### Wishlist Page
![Wishlist Page](/public/assets/for%20readme/wishlist%20page.png)

### AddToCart Page
![AddToCart Page](/public/assets/for%20readme/add-cart%20page.png)

### Profile
![Profile](/public/assets/for%20readme/profile.png)

### Checkout Page
![Checkout Page](/public/assets/for%20readme/checkout%20page.png)

### Admin Dashboard
![Admin Dashboard](/public/assets/for%20readme/admin%20dashboard.png)

### User Dashboard
![User Dashboard](/public/assets/for%20readme/user-dashboard.png)

### Login Page
![Login Page](/public/assets/for%20readme/sign-in%20page.png)

### Register Page
![Register Page](/public/assets/for%20readme/sign%20up%20pagepng.png)

### 📱 Mobile View 
![Mobile View](/public/assets/for%20readme/mobile-view.png)

## Tech Stack

### Frontend
- React 18
- Vite
- React Router
- Tailwind CSS
- daisyUI
- TanStack Query
- Framer Motion
- Recharts
- React Hook Form
- React Hot Toast
- react-helmet-async
- react-icons

### Integrations
- Firebase Authentication
- Stripe
- Axios

## Project Structure

```text
src/
├── Components/         # Shared UI components such as navbar, footer, SEO, loaders
├── Firebase/           # Firebase client configuration
├── Hooks/              # Reusable hooks for auth, cart, wishlist, products, API access
├── layouts/            # Main, auth, and dashboard layout wrappers
├── pages/              # Public pages, auth pages, shop, checkout, dashboard modules
├── Provider/           # Global auth context provider
├── Routes/             # Route definitions and route protection components
└── utils/              # Shared helpers, animations, links, and reusable product UI
```

## Available Pages

### Public Pages
- Home
- Shop
- About
- Contact
- Product Details

### Auth Pages
- Sign In
- Sign Up
- Forgot Password

### User Pages
- Wishlist
- Cart
- Checkout
- Profile
- Dashboard Home
- My Orders
- Track Order

### Admin Pages
- Dashboard overview
- All Products
- Orders
- Users
- Analytics
- Settings

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** 18 or later
- **npm** or another compatible package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sahkil12/B4-Style-Client
   cd B4-Style-Client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the required environment variables:

   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_PAYMENT_PUBLISH_KEY=your_stripe_publishable_key
   VITE_API_URL_PRODUCTION=your_backend_api_url
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local app in your browser using the URL shown by Vite.

## Scripts

- `npm run dev` — Start the development server.
- `npm run build` — Create a production build.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run ESLint.

## Authentication

This project uses **Firebase Authentication** for:

- Email/password sign up and sign in
- Google sign in
- Password reset
- Auth state persistence
- Protected routes for user-only and admin-only sections

## Payment Flow

Stripe is used for payment processing on the checkout page. The publishable key is loaded from environment variables, and payment intent confirmation is handled through backend API endpoints.

## API Integration

The frontend communicates with backend services using Axios clients for:

- Public product and user requests
- Authorized user actions with bearer token injection
- Checkout and payment processing
- Wishlist, cart, and dashboard operations

## Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the generated build locally:

```bash
npm run preview
```

This project is intended for the B4 Style website. Add a license section here if you want to make the repository publicly reusable.

## 👨‍💻 Developer

**Mustafa Tazwer Shakil**  
Web Developer  
📧 Email: tazwershakilshakil@gmail.com  
🌐 Portfolio: https://mustafa-tazwer.vercel.app/

## 📄 License

This project is licensed under the MIT License.