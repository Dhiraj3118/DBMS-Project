import React, { useState } from 'react'
import Base from '../components/Base'

function AddPassenger() {
    const [value, setValue] = useState({
        id: "",
        firstname: "",
        middlename: "",
        lastname: ""
    });
    const [success, setSuccess] = useState('');


    let submitFunc = () => {
        console.log(value)
        let body = JSON.stringify(value);
        fetch('http://localhost:5000/addpassenger', {
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
                setSuccess(`Passenger registered with ID ${value.id}`);
                // setValue({});
            })
    }
    return (
        <Base>
            <h3 style={{ margin: '2rem 0' }} className="text-center">Register as a Passenger</h3>
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <input value={value.id} onChange={e => setValue({ ...value, id: e.target.value })} type="text" className="form-control" placeholder="User ID" />
                    </div>
                    <div className="col">
                        <input value={value.firstname} onChange={e => setValue({ ...value, firstname: e.target.value })} type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col">
                        <input value={value.middlename} onChange={e => setValue({ ...value, middlename: e.target.value })} type="text" className="form-control" placeholder="Middle Name" />
                    </div>
                    <div className="col">
                        <input value={value.lastname} onChange={e => setValue({ ...value, lastname: e.target.value })} type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col">
                        <button type="submit" class="btn btn-dark" onClick={submitFunc}>Register as Passenger</button>
                    </div>
                </div>
                <p>{success !== '' && success}</p>
            </div>
        </Base>
    )
}

export default AddPassenger
