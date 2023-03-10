
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import {AllWords} from './data/words';


import MainPage from './components/MainPage';
import GamePage from './components/GamePage';
import FailPage from './components/FailPage';




let state = [
  {id: 0, stateName: 'init'}, 
  {id: 1, stateName: 'play'}, 
  {id: 2, stateName: 'retry'}
]



function App() {

    const[thisState, selectState] = useState(state[0].stateName)
    const[words] = useState(AllWords)
 




    





    const[selectedWord, setSelectedWord] = useState("")
    const[selectedClass, setSelectedClass] = useState("")
    const[selectedLetter, setSelectedLetter] = useState("")
    const[totalPoints, setTotalPoints] = useState(0)
    //Numero de tentativas de advinhação
    const[chances, setChances] = useState(4)


    //Letras usadas
    const[wrongLetter, setWrongLetter] = useState([])
    const[correctLetter, setCorrectLetter] = useState([])


    let selectGameParameters = useCallback(() =>{
    const allClasses = Object.keys(words)
    const classNumber = Math.floor(Math.random() * Object.keys(allClasses).length)
    const thisClass = allClasses[classNumber]
    
    
    const thisWord = words[thisClass][Math.floor(Math.random() * words[thisClass].length)]
   
    return{thisClass, thisWord}
  
  
  }
, [words])
const startGame = useCallback(() =>{
retryStates()

//Seleciona a classe e a palavra de forma aleatoria
    const{thisClass, thisWord} = selectGameParameters()



//Split na palavra aleatoria
    let arrayWord = thisWord.toLowerCase().split("")
    
    setSelectedClass(thisClass)
    setSelectedWord(thisWord)
    setSelectedLetter(arrayWord)



    selectState(state[1].stateName)
}
, [selectGameParameters])
const verifyLetter = (letter) =>{
    let lowerCaseLetter = letter.toLowerCase()

      if (correctLetter.includes(lowerCaseLetter) || wrongLetter.includes(lowerCaseLetter)) {
        return;
      } 



      if (selectedLetter.includes(lowerCaseLetter)) {
        setCorrectLetter((actualCorrectLetter)=>[
            ...actualCorrectLetter,
            lowerCaseLetter


        ])
      } else{
        setWrongLetter((actualWrongLetter)=>[
            ...actualWrongLetter,
            lowerCaseLetter


        ])

        setChances((actualChances)=>(actualChances - 1))
        
      }
      
      
      
}


const retryStates = () =>{

        setCorrectLetter([])
        setWrongLetter([])

}



//Reinicia as info
useEffect(()=>{
    if(chances===0){

        retryStates()
        selectState(state[2].stateName)
      


    }



}, [chances])


//Verifica o jogo
useEffect(()=>{
    const unrepeatLetters = [ ...new Set(selectedLetter)]



    if (correctLetter.length === unrepeatLetters.length) {
      setTotalPoints((actualTotalPoints)=>(actualTotalPoints = actualTotalPoints*2 + 40))
      startGame()



    }
}, [correctLetter, selectedLetter, startGame])




const retryGame = () =>{



    setTotalPoints(0)
    setChances(4)    
    selectState(state[0].stateName)



}



  return (
    <div className="App">


      {thisState === 'init' && <MainPage startGame={startGame} />}
      {thisState === 'play' && <GamePage 
      verifyLetter={verifyLetter} 

      selectedClass={selectedClass} 
      selectedWord={selectedWord}


      selectedLetter={selectedLetter} 


      totalPoints={totalPoints}
      chances={chances}

      correctLetter={correctLetter}
      wrongLetter={wrongLetter}
      
      />}  
      {thisState === 'retry' && <FailPage retryGame={retryGame} selectedWord={selectedWord} totalPoints={totalPoints}/>}



    </div>
  );
}

export default App;
