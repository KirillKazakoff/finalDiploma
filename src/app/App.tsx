/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageRoute from './components/routes/PageRoute';
import MainRoute from './components/routes/MainRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PageRoute />}>
                    <Route path='/' element={<MainRoute />} />
                </Route>
            </Routes>
        </Router>
    );
}
