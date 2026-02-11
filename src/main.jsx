import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/MainRoot/MainRoot';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const queryClient = new QueryClient()
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISH_KEY)

createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Elements stripe={stripePromise}>
        <StrictMode>
          <Toaster />
          <RouterProvider router={router} />
        </StrictMode>
      </Elements>
    </AuthProvider>
  </QueryClientProvider>
)
