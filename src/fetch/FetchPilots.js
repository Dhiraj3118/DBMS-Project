import React, { useState } from 'react'
import Base from '../components/Base'

function FetchPilots() {
    const [value, setValue] = useState('');
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    let submitFunc = () => {
        let obj = { userID: value };
        let body = JSON.stringify(obj);
        fetch('http://localhost:5000/fetchpilots', {
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
            <h3 style={{ margin: '2rem 0', paddingLeft: '4rem' }} className="text-center">Know your with Pilot just your User ID</h3>
            <div className="container">
                <div className="row mt-4 mb-4">
                    <div className="col-4"></div>
                    <div className="col-3">
                        <input value={value} onChange={e => setValue(e.target.value)} type="text" className="form-control" placeholder="Enter User ID" />
                    </div>
                    <div className="col-3">
                        <button type="submit" class="btn btn-dark" onClick={submitFunc}>Find My Pilot</button>
                    </div>
                </div>

                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Pilot IDs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && data.rows.map(row => <tr key={row["P_ID"]}><td>{row["P_ID"]}</td></tr>)}
                    </tbody>
                </table>
            </div>
        </Base>
    )
}

export default FetchPilots
