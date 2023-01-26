import React from 'react'
import './FailPage.css'
const FailPage = ({retryGame, selectedWord, totalPoints}) => {
  return (
    <div>


        <h1>Voce conseguiu <span className='points'>{totalPoints}</span> pontos</h1>
        <h2>A palavra era: <span className='tips'>{selectedWord}</span></h2>
        <button className="retryBtn" onClick={retryGame}>Tentar Novamente</button>


        </div>
  )
}

export default FailPage