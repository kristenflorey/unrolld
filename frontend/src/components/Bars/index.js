import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './bars.css';
// import { useDispatch } from 'react-redux';
import caviar from "../../img/caviar.png";

function Bars() {
    const [bars, setBars ] = useState([]);


    // const dispatch = useDispatch();

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
                        <div className="sushi-bar-div" >
                            <NavLink to={`/${name}`} className="sushi-bar-img" key={id}>
                                <img className="bar-avatar" alt="avatar"src={caviar} />
                            </NavLink>
                            <div className={`sushi-bar-div-${id}`} key={id}>
                                <h1 className="bar-name">{name}</h1>
                                <p className="bar-location">{location}</p>
                                <a href={website} target="_blank" className="bar-website">{website}</a>
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default Bars;
