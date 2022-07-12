import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./Layout.module.scss";

const Layout = ({ children }) => {
   return (
      <div className={style.container}>
         <header>
            My App
            <nav>
               <ul>
                  <li>
                     <NavLink
                        to="/carrito"
                        className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Carrito
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/cuenta"
                        className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Mi cuenta
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </header>
         <main>{children ? children : <Outlet />}</main>
         <footer>@copyright 2022</footer>
      </div>
   );
};

export default Layout;
