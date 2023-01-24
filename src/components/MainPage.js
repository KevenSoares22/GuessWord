import React from 'react'
import './MainPage.css'
const MainPage = ({ startGame }) => {

  return (
    <div>
        
        
        
        <h1>Guess Word</h1>
        <p>Mostre suas habilidades em advinhar palavras</p>
        <button className="iniciarBtn" onClick={startGame}>Iniciar</button>
        
        </div>
  )
}

export default MainPage