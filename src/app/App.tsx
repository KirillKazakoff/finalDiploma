/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageRoute from './components/routes/PageRoute';
import MainRoute from './components/routes/MainRoute';
import TicketsRoute from './components/routes/TicketsRoute';
import ErrorRoute from './components/routes/ErrorRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PageRoute />}>
                    <Route path='/' element={<MainRoute />} />
                    <Route path='/tickets' element={<TicketsRoute />} />
                </Route>
                <Route path='*' element={<ErrorRoute />} />
            </Routes>
        </Router>
    );
}
