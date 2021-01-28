import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import './bars.css';
import { useDispatch } from 'react-redux';

function Bars() {
    const [bars, setBars ] = useState([]);


    const dispatch = useDispatch();

    useEffect(async() => {
        const res = await fetch(`http://localhost:5000/api/bars`)
        const data = await res.json();
        dispatch(setBars(data))
        console.log(data)
    }, [dispatch]);

    return (
        <>
            {bars.map((bar) => {
                const { id, name, location, website} = bar;
                return (
                    <div className="sushi-bars">
                        <div className="sushi-bar-circle" key={id}>

                            <NavLink to="/kamiya" className="bar-name">{name}</NavLink>
                            <p className="bar-location">{location}</p>
                            <a className="bar-website">{website}</a>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default Bars;
