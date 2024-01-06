import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";

const AppRoutes = () => (
    <div>
        <Routes>
            <Route path='/home' element={<HomePage  />} />
        </Routes>
    </div>
);
export default AppRoutes;
