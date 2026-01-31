import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AuthLayout = () => {
     return (
          <div className='bg-secondary/85'>
               <div className=''>
                    <section className='md:w-[75%] mx-auto py-5 flex justify-between items-center gap-10 px-5'>
                         <NavLink to={'/'}>
                              <img src='/b4-style-logo.png' className="h-12" alt="B4 Style Logo" />
                         </NavLink>
                         <NavLink to={'/'}>
                              <button className='text-accent cursor-pointer py-2 px-6 font-semibold bg-primary hover:bg-primary/90'>Home</button>
                         </NavLink>
                    </section>
               </div>
               <section className='min-h-[calc(100vh-88px)]'>
                    <Outlet></Outlet>
               </section>
          </div>
     );
};

export default AuthLayout;