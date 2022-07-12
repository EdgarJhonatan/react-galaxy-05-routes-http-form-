import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Layout from "../../../core/Layout/Layout";
import styles from "./Layout.module.scss";

const AccountLayout = () => {
   return (
      <Layout>
         <div className={styles.container}>
            <aside className={styles.sidebar}>
               <nav>
                  <ul>
                     <li>
                        <NavLink to={"perfil"}>Perfil</NavLink>
                     </li>
                     <li>
                        <NavLink to={"pedidos"}>Pedidos</NavLink>
                     </li>
                  </ul>
               </nav>
            </aside>
            <div className={styles.content}>
               <Outlet />
            </div>
         </div>
      </Layout>
   );
};

export default AccountLayout;
