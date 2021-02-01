import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Rolls.css';
import FlipCard from 'fc-card-component';




function Rolls() {
    const [rolls, setRolls] = useState([]);

    useEffect(async() => {
        const res = await fetch(`http://localhost:5000/api/rolls`)
        const data = await res.json();
        setRolls(data)
        console.log(data)
    }, []);

    return (
        <>
            {rolls.map((roll) => {
                const { id, name, description, SushiBar:{name:location, id:sushi_id} } = roll;
                console.log(roll)
                console.log(id)
                return (
                    <div className="sushi-rolls">
                        <FlipCard
                        id="font-card"
                        className='flippy-card'
                        height={160}
                        width={397}
                        margin={20}
                        rotationAxis="y"
                        textFront={
                        <div className="sushi-rolls-div">
                            <NavLink to={`/roll/${id}`}className="sushi-roll-img" key={id}>
                                <img className="sushi-avatar" alt="avatar"src={`./img/sushi-roll-${id}.png`} />
                            </NavLink>
                            <div className="roll-info" key={id}>
                                <ps className="roll-name">{name}</ps>
                                <br/>
                                <ps className="roll-location">{location} Sushi Bar</ps>
                            </div>
                        </div>
                        }
                        textBack={
                        <div className="back-div" id="back-card">
                            <p className="sushi-info">{description}</p>
                            <NavLink to={`/bars/${sushi_id}`} >
                                <button className="find-button">Find this Roll</button>
                            </NavLink>
                        </div>
                        }
                        colorFront="yellow"
                        textColorFront="cream"
                        >

                        </FlipCard>
                    </div>
                )
            })}
        </>
    )
}

export default Rolls;
