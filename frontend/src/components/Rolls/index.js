import { useState, useEffect } from 'react';
import './Rolls.css';

function Rolls() {
    const [rolls, setRolls] = useState([]);

    useEffect(async() => {
        const res = await fetch(`http://localhost:5000/api/rolls`)
        const data = await res.json();
        setRolls(data)
        console.log(data)
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const res = fetch(`http://localhost:5000/api/rolls`)
            const data = await res.json();
            setRolls(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            {rolls.map((roll) => {
                const { id, name, SushiBar:{name:location} } = roll;
                return (
                    <div className="sushi-roll-div" key={id}>
                        <h2 className="roll-name">{name}</h2>
                        <h3 className="roll-location">{location}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default Rolls;
