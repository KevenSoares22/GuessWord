import {useState, useRef} from 'react'
import './GamePage.css'
const GamePage = ({verifyLetter, selectedClass, selectedWord, selectedLetter, totalPoints, chances, correctLetter, wrongLetter}) => {
  const inputRef = useRef(null)
  const[letter, setLetter] = useState("")
  const handleSubmit = (event) =>{
    event.preventDefault()
    verifyLetter(letter)
    setLetter("")

  }
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
            <form onSubmit={handleSubmit}>
             <label for="inputLetter">Insira uma letra e pressione enter</label>
             <input type="text" name="inputLetter" id="inputLetter" ref={inputRef} value={letter} onChange={(event)=>(setLetter(event.target.value))} maxLength="1" required/>
             
            </form>
        


        </div>
        
      
        
        <h3>Voce tem <span>{chances}</span> tentativas</h3>

    </div>




  )
}

export default GamePage