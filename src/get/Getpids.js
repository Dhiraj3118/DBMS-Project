import { useEffect, useState } from 'react';
import Base from '../components/Base'

function Getpids() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/getpids')
            .then(res => res.json())
            .then(rdata => {
                setData(rdata);
                console.log(rdata);
                setLoading(false);
            })
    }, [])

    return (
        <Base>
            <h3 style={{ margin: '2rem 0' }} className="text-center">Find the Pilots and Altitudes of Flights flying at same Latitude, Longitude on same date and time</h3>
            {loading && <p>loading</p>}
            <div className="container">
                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                            <th>P_ID 1</th>
                            <th>P_ID 2</th>
                            <th>Altitude(Flight 1)</th>
                            <th>Altitude(Flight 2)</th>
                            <th>Flight_ID 1</th>
                            <th>Flight_ID 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && data.rows.map(row => <tr key={row.flight1 + row.flight2}>
                            <td>{row.p1}</td>
                            <td>{row.p2}</td>
                            <td>{row.alt1}</td>
                            <td>{row.alt2}</td>
                            <td>{row.flight1}</td>
                            <td>{row.flight2}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </Base >
    )
}

export default Getpids
