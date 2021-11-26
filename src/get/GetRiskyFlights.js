import { useEffect, useState } from 'react';
import Base from '../components/Base'

function GetRiskyFlights() {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/getriskyflights')
            .then(res => res.json())
            .then(rdata => {
                setData(rdata);
                console.log(rdata);
                setLoading(false);
            })
    }, [])

    return (
        <Base>
            <h3 style={{ margin: '2rem 0' }} className="text-center">List of Aircraft IDs that have not been serviced for last 1.5 years:</h3>
            {loading && <p>loading</p>}
            <div className="container">
                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Aircraft IDs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && data.rows.map(row => <tr key={row.ID}><td>{row['Aircraft_ID']}</td></tr>)}
                    </tbody>
                </table>
            </div>
        </Base>
    )
}

export default GetRiskyFlights
