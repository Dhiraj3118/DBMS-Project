import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/getriskyflights">Get Risky Flights</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/getcities">Get Cities</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/getpids">Get PIDs and Altitudes</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/addpassenger">Add Passenger</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/addflight">Add Flight</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/fetchflights">Fetch Scheduled Flights</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/fetchpilots">Know your Pilot</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: 'underline' }} className="nav-link active" to="/fetchroutes">Find Alternate Route</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav
