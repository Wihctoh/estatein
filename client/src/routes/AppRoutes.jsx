import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import LoginWindow from "../components/auth/Login/LoginWindow";

const AppRoutes = () => (
    <div>
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/login' element={<LoginWindow />} />
        </Routes>
    </div>
);
export default AppRoutes;
