import React from 'react'
import './FailPage.css'
const FailPage = ({retryGame}) => {
  return (
    <div>
        
        
        <h1>FailPage</h1>
        <button className="retryBtn" onClick={retryGame}>Tentar Novamente</button>



        </div>
  )
}

export default FailPage