import React from 'react'
import './GamePage.css'
const GamePage = ({loseGame}) => {
  return (
    <div>


        <h1>GamePage</h1>
        <button className="gameBtn" onClick={loseGame}>Test</button>
    </div>




  )
}

export default GamePage