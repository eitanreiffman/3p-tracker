import React, {useState} from 'react'
import './MediumBox.css'

export default function MediumBox() {

   const [players, setPlayers] = useState({
    robinson: ['Duncan Robinson', 8],
    murray: ['Jamal Murray', 10],
    jokic: ['Nikola Jokic', 7],
    brown: ['Bruce Brown', 7],
    vincent: ['Gabe Vincent', 10],
    martin: ['Caleb Martin', 5],
    strus: ['Max Strus', 5],
    lowry: ['Kyle Lowry', 7],
    love: ['Kevin Love', 7],
    gordon: ['Aaron Gordon', 5],
    butler: ['Jimmy Butler', 5]
   });

   

   const updateNumber = (playerKey) => {
    setPlayers(prevPlayers => {
        const updatedPlayers = { ...prevPlayers };
        updatedPlayers[playerKey][1] += 1;
        console.log('3 pointer incremented');
        return updatedPlayers;
    })
   }

  return (
    <>
    {Object.entries(players).map(([key, value]) => (
            <div className='medium-box' key={key} onClick={() => updateNumber(key)}>
                <div>{value[0]}</div>
                <div>{value[1]}</div>
            </div>
        )
      )}
    </>
  )
}
