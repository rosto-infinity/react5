import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';

const Router = () => {
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}>
            </Route>
            <Route path="/ContactsPage" element={<ContactsPage/>}>
            </Route>
        </Routes>
       </BrowserRouter>
    );
}
export default Router;
