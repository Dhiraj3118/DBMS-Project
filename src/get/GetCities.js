import { useEffect, useState } from 'react';
import Base from '../components/Base'

function GetCities() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/getcities')
            .then(res => res.json())
            .then(rdata => {
                setData(rdata);
                console.log(rdata);
                setLoading(false);
            })
    }, [])

    return (
        <Base>
            <h3 style={{ margin: '2rem 0' }} className="text-center">List of cities having wind speed higher than average wind speed</h3>
            {loading && <p>loading</p>}
            <div className="container">
                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && data.rows.map(row => <tr key={row.ID}><td>{row['City']}</td></tr>)}
                    </tbody>
                </table>
            </div>
        </Base>
    )
}

export default GetCities
