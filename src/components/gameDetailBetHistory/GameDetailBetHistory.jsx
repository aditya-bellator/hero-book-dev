import React from 'react'
////styles
import "./styles.scss"
const GameDetailBetHistory = () => {
  return (
    <div className="sidebar-box my-bet-container">
    <div className="sidebar-title">
      <h4>My Bet</h4>
    </div>
    <div className="my-bets">
      <div className="table-responsive w-100">
        <table className="table">
          <thead>
            <tr>
              <th>Matched Bet</th>
              <th className="text-end">Odds</th>
              <th className="text-end">Stake</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default GameDetailBetHistory