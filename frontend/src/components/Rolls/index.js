import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Rolls.css';
import california from "../../img/california.png";
import caviar from "../../img/caviar.png";


function Rolls() {
    const [rolls, setRolls] = useState([]);

    useEffect(async() => {
        const res = await fetch(`http://localhost:5000/api/rolls`)
        const data = await res.json();
        setRolls(data)
        console.log(data)
    }, []);

    // useEffect(() => {
    //     async function fetchMyAPI() {
    //       let response = await fetch('api/rolls')
    //       response = await response.json()
    //       setRolls(response)
    //     }

    //     fetchMyAPI()
    //   }, [])

    return (
        <>
            {rolls.map((roll) => {
                const { id, name, SushiBar:{name:location} } = roll;
                console.log(roll)
                console.log(id)
                return (
<<<<<<< Updated upstream
                    <div className="sushi-roll-div" key={id}>
                        <h2 className="roll-name">{name}</h2>
                        <h3 className="roll-location">{location}</h3>
=======
                    <div className="sushi-rolls">
                        <div className="sushi-rolls-div">
                            <NavLink to={`/sushi-${id}`}className="sushi-roll-img" key={id}>
                                <img className="sushi-avatar" alt="avatar"src={california} />
                            </NavLink>
                            <div className={`sushi-roll-div-${id}`} key={id}>
                                <h1 className="roll-name">{name}</h1>
                                <h3 className="roll-location">{location} Sushi Bar</h3>
                            </div>
                        </div>
>>>>>>> Stashed changes
                    </div>
                )
            })}
        </>
    )
}

export default Rolls;
