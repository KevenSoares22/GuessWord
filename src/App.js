
import './App.css';
import { useState } from 'react';
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
    let selectGameParameters = () =>{
    const allClasses = Object.keys(words)
    const classNumber = Math.floor(Math.random() * Object.keys(allClasses).length)
    const thisClass = allClasses[classNumber]
    
    console.log(thisClass)
    const thisWord = words[thisClass][Math.floor(Math.random() * words[thisClass].length)]
   
    return{thisClass, thisWord}
  
  
  }


const startGame = () =>{


//Seleciona a classe e a palavra de forma aleatoria
    const{thisClass, thisWord} = selectGameParameters()



//Split na palavra aleatoria
    let arrayWord = thisWord.toLowerCase().split("")
    console.log(arrayWord)
    setSelectedClass(thisClass)
    setSelectedWord(thisWord)
    setSelectedLetter(arrayWord)



    selectState(state[1].stateName)
}

const loseGame = () =>{
    selectState(state[2].stateName)

}
const retryGame = () =>{
    selectState(state[0].stateName)



}



  return (
    <div className="App">


      {thisState === 'init' && <MainPage startGame={startGame} />}
      {thisState === 'play' && <GamePage loseGame={loseGame}/>}  
      {thisState === 'retry' && <FailPage retryGame={retryGame}/>}



    </div>
  );
}

export default App;
