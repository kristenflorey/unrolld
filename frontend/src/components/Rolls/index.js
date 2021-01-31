import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Rolls.css';
// import california from "../../img/california.png";
// import caviar from "../../img/caviar.png";
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
                        height={130}
                        width={332}
                        margin={20}
                        rotationAxis="y"
                        textFront={
                        <div className="sushi-rolls-div">
                            <NavLink to={`/roll/${id}`}className="sushi-roll-img" key={id}>
                                <img className="sushi-avatar" alt="avatar"src={`./img/sushi-roll-${id}.png`} />
                                {/* <img className="sushi-avatar" alt="avatar"src={california} /> */}
                            </NavLink>
                            <div className={`sushi-roll-div-${id}`} key={id}>
                                <p className="roll-name">{name}</p>
                                <p className="roll-location">{location} Sushi Bar</p>
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
                        // fontSize={27}
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
