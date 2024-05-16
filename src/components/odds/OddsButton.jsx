import React from 'react'

const OddsButton = ({lay}) => {
  return (
    <div className={`${lay?"lay":"back"} odd-box `}><span className="bet-odd"><b>1.67</b></span></div>
  )
}

export default OddsButton