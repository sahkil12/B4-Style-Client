import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopLinks = ({ links }) => (
     <ul className="flex gap-10 text-sm">
          {links?.filter(l => !l.icon).map((item) => (
               <li key={item.name}>
                    <NavLink
                         to={item.to}
                         className={({ isActive }) => `relative tracking-widest cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                         ${isActive ? "after:w-full text-primary font-extrabold" : "after:w-0 hover:after:w-full font-normal"}`
                         }
                    >
                         {item.name}
                    </NavLink>
               </li>
          ))}
     </ul>
);

export default DesktopLinks;