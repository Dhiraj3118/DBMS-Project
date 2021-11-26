import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import App from './App'
import FetchFlights from './fetch/FetchFlights';
import FetchPilots from './fetch/FetchPilots';
import FetchRoutes from './fetch/FetchRoutes';
import GetCities from './get/GetCities';
import Getpids from './get/Getpids';
import GetRiskyFlights from './get/GetRiskyFlights'
import AddFlight from './insert/AddFlight';
import AddPassenger from './insert/AddPassenger';


const MyRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <App />},
        {path: '/getriskyflights', element: <GetRiskyFlights />},
        {path: '/getcities', element: <GetCities />},
        {path: '/getpids', element: <Getpids />},
        {path: '/addpassenger', element: <AddPassenger />},
        {path: '/addflight', element: <AddFlight />},
        {path: '/fetchflights', element: <FetchFlights />},
        {path: '/fetchpilots', element: <FetchPilots />},
        {path: '/fetchroutes', element: <FetchRoutes />},
    ]);
    return routes;
};
const AppRoutes = () => {
    return (
        <Router>
            <MyRoutes />
        </Router>
    );
};

export default AppRoutes;
