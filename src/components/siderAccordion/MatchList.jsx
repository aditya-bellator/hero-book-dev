import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
//// styles
import { useState } from "react";
import "./styles.scss"
  const CollapsibleTable = () => {
    const [listOpen, setListOpen] = useState(false)
    const [matchListOpen, setMatchListOpen] = useState(false)
    return (
    <div className='match-list-accordion'>
    <ul>
      <li onClick={()=>setListOpen(!listOpen)} className='st-list'>
       <span >
        {!listOpen? <LocalHospitalOutlinedIcon/>:<IndeterminateCheckBoxOutlinedIcon/>}
     
          Home
        </span> 
    
        </li>
      <ul className={`${listOpen?"list3":"list2"}`}>
        <li onClick={()=>setMatchListOpen(!matchListOpen)}>
        <span className='nd-list'>
        {!matchListOpen? <LocalHospitalOutlinedIcon/>:<IndeterminateCheckBoxOutlinedIcon/>}
     
          hizdjf
        </span>
          <ul className={`${matchListOpen?"matchListOpen":"matchListClose"}`} onClick={(e)=>e.stopPropagation()}>
            <li>
             <span className='nested-list'>
              jdnfkl
              </span> 
              </li>
           
          
          </ul>
        </li>
      
      </ul>
    </ul>
    </div>
    );
  };
  
  export default CollapsibleTable;
  

