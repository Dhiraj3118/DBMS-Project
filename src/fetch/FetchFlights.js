import React, { useState } from 'react'
import Base from '../components/Base'

function FetchFlights() {
    const [value, setValue] = useState('');
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    let submitFunc = () => {
        let obj = { date: value };
        let body = JSON.stringify(obj);
        fetch('http://localhost:5000/fetchflights', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: body
        })
            .then(res => res.json())
            .then(rdata => {
                setValue('');
                setData(rdata);
                setLoading(false);
            })
    }
    return (
        <Base>
            <h3 style={{ margin: '2rem 0', paddingRight: '5rem' }} className="text-center">Find the scheduled flights for a given date</h3>
            <div className="container">
                <div className="row mt-4 mb-4">
                    <div className="col-3"></div>
                    <div className="col-3">
                        <input value={value} onChange={e => setValue(e.target.value)} type="text" className="form-control" placeholder="Enter Date" />
                    </div>
                    <div className="col-3">
                        <button type="submit" class="btn btn-dark" onClick={submitFunc}>Find Scheduled Flights</button>
                    </div>
                </div>
                {!loading && <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Flight ID</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Departure Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.rows.map(row => <tr key={row["flight_id"]}>
                            <td>{row["flight_id"]}</td>
                            <td>{row["source"]}</td>
                            <td>{row["destination"]}</td>
                            <td>{row["departure_time"]}</td>
                            <td>{row["arrival_time"]}</td>
                            <td>{row["departure_date"]}</td>
                        </tr>)}
                    </tbody>
                </table>}
            </div>
        </Base>
    )
}

export default FetchFlights
