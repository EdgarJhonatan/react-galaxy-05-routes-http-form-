import { Navigate, Route, Routes } from "react-router-dom";
import AccountLayout from "./Layout/Layout";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./pages/ProfilePage";

const AccountRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<AccountLayout />}>
            <Route index element={<Navigate to="perfil" replace />} />
            <Route path="perfil" element={<ProfilePage />} />
            <Route path="pedidos" element={<OrderPage />} />
         </Route>
      </Routes>
   );
};

export default AccountRouter;
