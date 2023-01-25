import React from 'react'
import './GamePage.css'
const GamePage = ({loseGame, selectedClass, selectedWord, selectedLetter, totalPoints, chances, correctLetter, wrongLetter}) => {
  return (
    <div className="play">

        <h1>Advinhe a palavra</h1>
        <h2>Voce tem: <span className="points">{totalPoints}</span> pontos</h2>


        <h3>Dica: <span className="tips">{selectedClass}</span></h3>



        <div className="guessWords">
            {selectedLetter.map((letter, i) => (
                correctLetter.includes(letter) ? (
                    <span key={i}>{letter}</span>
                ) : (
                    <span key={i}></span>
                )



            ))}



        </div>




        <div className="entryLetters">
            <form>
             <label for="inputLetter">Insira uma letra</label>
             <input type="text" name="inputLetter" id="inputLetter" maxLength="1" required/>
             
            </form>
        


        </div>
        
        
        
        <h3>Voce tem mais <span>{chances}</span> tentativas</h3>

    </div>




  )
}

export default GamePage