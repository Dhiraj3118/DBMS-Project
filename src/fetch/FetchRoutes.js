import React, { useState } from 'react'
import Base from '../components/Base'

function FetchRoutes() {
    const [value, setValue] = useState('');
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    let submitFunc = () => {
        let obj = { routeID: value };
        let body = JSON.stringify(obj);
        fetch('http://localhost:5000/fetchroutes', {
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
            <h3 style={{ margin: '2rem 0', paddingRight: '5rem' }} className="text-center">Fetch Alternate Routes for a Route ID</h3>
            <div className="container">
                <div className="row mt-4 mb-4">
                    <div className="col-3"></div>
                    <div className="col-3">
                        <input value={value} onChange={e => setValue(e.target.value)} type="text" className="form-control" placeholder="Enter Route ID" />
                    </div>
                    <div className="col-3">
                        <button type="submit" class="btn btn-dark" onClick={submitFunc}>Find Alternate Route ID</button>
                    </div>
                </div>

                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Pilot IDs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && data.rows.map(row => <tr key={row["Alternate_Route_ID"]}><td>{row["Alternate_Route_ID"]}</td></tr>)}
                    </tbody>
                </table>
            </div>
        </Base>
    )
}

export default FetchRoutes
