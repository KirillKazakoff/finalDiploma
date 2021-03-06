/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageRoute from './components/routes/PageRoute';
import MainRoute from './components/routes/MainRoute';
import TicketsRoute from './components/routes/TicketsRoute';
import ErrorRoute from './components/routes/ErrorRoute';
import PlacesRoute from './components/routes/PlacesRoute';
import PassengersRoute from './components/routes/PassengersRoute';
import PasPlacesRoute from './components/routes/PasPlacesRoute';
import PaymentRoute from './components/routes/PaymentRoute';
import CheckRoute from './components/routes/CheckRoute';
import SuccessRoute from './components/routes/SuccessRoute';
import HistoryError from './components/routes/HistoryRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PageRoute />}>
                    <Route path='/' element={<MainRoute />} />
                    <Route path='/tickets' element={<TicketsRoute />} />
                    <Route path='/places' element={<PlacesRoute />} />
                    <Route path='/passengers' element={<PassengersRoute />} />
                    <Route path='/pas-places' element={<PasPlacesRoute />} />
                    <Route path='/payment' element={<PaymentRoute />} />
                    <Route path='/check' element={<CheckRoute />} />
                    <Route path='/success' element={<SuccessRoute />} />
                </Route>

                <Route path='*' element={<ErrorRoute />} />
                <Route path='/history-error' element={<HistoryError />} />
            </Routes>
        </Router>
    );
}
