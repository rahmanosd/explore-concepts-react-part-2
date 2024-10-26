import { useState } from 'react'
import './Teamstyle.css'
export default function Team(){
    const [Team, setTeam] = useState(11);

    const handleAdd = () => {
      const newTeam = Team + 1;
      setTeam(newTeam);
    }
    const handleRemove = () => {
        const newTeam = Team - 1;
        setTeam(newTeam)
    }
    return ( 
        <div className="teamstyle">
            <h1>Players : {Team}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
} 