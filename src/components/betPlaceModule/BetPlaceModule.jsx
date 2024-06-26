import React from 'react'
///styles
import "./styles.scss"
const BetPlaceModule = ({fun}) => {
  return (
    <div className='betplace-module-container'>
        <div className="bet-place-title">
          <h4>
            Place Bet
            </h4>  
            </div>
            <div className="bet-place-box back">
              <div className="bet-place-header">
                <ul>
                  <li>(Bet for)</li>
                  <li>Odds</li>
                  <li>Stake</li>
                  <li>Profite</li>
                </ul>
              </div>
              <div className="place-bet-body">
                <ul>
                  <li>
                  Rajasthan Royals
                  </li>
                  <li>
                    <input type="number" value={1}/>
                  </li>
                  <li>
                  <input type="number" />
                  </li>
                  <li>0</li>
                </ul>
              </div>
              <div className="place-bet-buttons">
                {Array.from(Array(10)).map((item)=>{
                  return(

                    <button className="btn btn-place-bet" key={item}>1k</button>
                  )
                })}
              
                </div>
                <div className="place-bet-action-buttons"><div>
                  <button className="btn btn-info">Edit</button></div>
                  <div>
                    <button className="btn btn-danger me-1" onClick={()=>fun(false)}>Reset</button>
                  <button className="btn btn-success" disabled="">Submit</button></div></div>
            </div>
    </div>
  )
}

export default BetPlaceModule