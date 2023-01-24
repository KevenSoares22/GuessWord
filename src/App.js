
import './App.css';
import { useState } from 'react';
//import AllWords from './data/words';


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
   // const[words] = useState(AllWords)

   // console.log(words)
const startGame = () =>{
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
