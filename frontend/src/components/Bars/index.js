import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import './bars.css';

function Bars() {
    const [bars, setBars ] = useState([]);

    useEffect(async() => {
        const res = await fetch(`http://localhost:5000/api/bars`)
        const data = await res.json();
        setBars(data)
        console.log(data)
    }, []);

    return (
        <>
            {bars.map((bar) => {
                const { id, name, location, website} = bar;
                return (
                    <div className="sushi-bars">
                        <div className="sushi-bar-circle" key={id}>

                            <NavLink to="/kamiya" className="bar-name">{name}</NavLink>
                            <p className="bar-location">{location}</p>
                            <p className="bar-website">{website}</p>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default Bars;
