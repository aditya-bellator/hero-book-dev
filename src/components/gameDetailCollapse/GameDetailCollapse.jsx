
////style
import "./styles.scss"
import DetailOdds from "./DetailOdds";
const GameDetailCollapse = ({fun}) => {
  const oddsColor = ["back2","back1","back","lay","lay1","lay2"]
  return (
    <div className="game-market market-4 ">
      <div className="market-title">
        <span>MATCH_ODDS</span>
      </div>
      <div className="market-header">
      
      <div className="odds-row-container flex items-center" >
        <div className="odds-row-left-col px-[5px]">
         <p>
           Max:1
          </p>
           </div>
        <div className="odds-row-right-col grid grid-cols-6">
          <DetailOdds height={28}/>
          <DetailOdds height={28}/>
          <DetailOdds height={28} value={"Back"} price={""} item={oddsColor[2]}/>
          <DetailOdds height={28} value={"Lay"} price={""} item={oddsColor[3]}/>
          <DetailOdds height={28}/>
          <DetailOdds height={28}/>
         
        </div>
      </div>
      </div>
      {  Array.from(Array(3)).map((item,index)=>{
        return(

          <div className="odds-row-container flex items-center" key={item}>
          <div className="odds-row-left-col px-[5px]">Kolkata Knight Riders</div>
          <div className="odds-row-right-col grid grid-cols-6 relative">
            {oddsColor?.map((item,index)=>
            {
              return(
  
                <DetailOdds index={index} item={item} key={item} value={1.99} price={674} height={44} border={true} fun={fun}/>
              )
            })}
            {index ===1 && 
           <div className="suspend absolute w-full h-full text-[red] font-bold flex items-center justify-center">
            Suspended
           </div>
          }
          </div>
        </div>
        )
      })}
     
     
    </div>
  );
};

export default GameDetailCollapse;
