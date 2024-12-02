import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const ProfileScreen = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminMain />} />
                <Route path="/*" element={<UserMain />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ProfileScreen
