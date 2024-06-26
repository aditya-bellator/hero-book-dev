import Filter from './CurrentFilter'

const CurrentBet = () => {
  return (
    <div className='satement-container'>
    <div className="satement-header"><h4 className="header-title">Current Bet</h4></div>
   <div className="statement-body p-[10px]">
<Filter/>
   </div>
  </div>
  )
}

export default CurrentBet