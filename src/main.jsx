import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/MainRoot/MainRoot';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <StrictMode>
       <Toaster />
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>

)
