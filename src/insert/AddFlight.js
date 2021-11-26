import React, { useState } from 'react'
import Base from '../components/Base'

function AddFlight() {
    const [value, setValue] = useState({
        id: "",
        date: "",
        aircraft: "",
        auth: "",
        route: ""
    });
    const [success, setSuccess] = useState('');

    let submitFunc = () => {
        console.log(value)
        let body = JSON.stringify(value);
        fetch('http://localhost:5000/addflight', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: body
        })
            .then(res => res.json())
            .then(data => {
                alert('data inserted successfully');
                setSuccess(`Flight with Flight ID ${value.id} scheduled for ${value.date}`)
                // setValue({});
            })
    }
    return (
        <Base>
            <h3 style={{ margin: '2rem 0' }} className="text-center">Schedule a Flight</h3>
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <input value={value.id} onChange={e => setValue({ ...value, id: e.target.value })} type="text" className="form-control" placeholder="Flight ID" />
                    </div>
                    <div className="col">
                        <input value={value.date} onChange={e => setValue({ ...value, date: e.target.value })} type="text" className="form-control" placeholder="Date" />
                    </div>
                    <div className="col">
                        <input value={value.aircraft} onChange={e => setValue({ ...value, aircraft: e.target.value })} type="text" className="form-control" placeholder="Aircraft ID" />
                    </div>
                    <div className="col">
                        <input value={value.auth} onChange={e => setValue({ ...value, auth: e.target.value })} type="text" className="form-control" placeholder="Authority ID" />
                    </div>
                    <div className="col">
                        <input value={value.route} onChange={e => setValue({ ...value, route: e.target.value })} type="text" className="form-control" placeholder="Route ID" />
                    </div>
                    <div className="col">
                        <button type="submit" class="btn btn-dark" onClick={submitFunc}>Schedule Flight</button>
                    </div>
                </div>
                <p>{success !== '' && success}</p>
            </div>
        </Base>
    )
}

export default AddFlight
