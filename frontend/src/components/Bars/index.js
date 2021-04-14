import { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom'
import './bars.css';

function Bars() {
    const [bars, setBars ] = useState([]);

    useEffect(async() => {
        const res = await fetch(`/api/bars`)
        const data = await res.json();
        setBars(data)
        console.log(data)
    }, []);

    return (
        <>
            {bars.map((bar) => {
                const { id, name, location, website} = bar;
                console.log(id)
                return (
                    <div className="sushi-bars">
                        <div className="sushi-bar-div" >
                            <NavLink to={`/bars/${id}`} className="sushi-bar-img" key={id}>
                                <img className="bar-avatar" alt="avatar"src={`./img/sushi-bar-${id}.png`} />
                            </NavLink>
                            <div className={`sushi-bar-div-${id}`} key={id}>
                                <ps className="bar-name">{name}</ps>
                                <br/>
                                <ps className="bar-location">{location}</ps>
                                <br/>
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
