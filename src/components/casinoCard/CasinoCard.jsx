
import { Link } from "react-router-dom";
///styles
import "./styles.scss"
import { baccart, casinoImg } from "../../assets";
const CasinoCard = () => {
  const imgArray = [casinoImg,baccart] 
  return (
    <>
    {imgArray?.map((item)=>{
      return(

      <div className="casino-list-item" key={item}>
        <Link href="/">
          <div
            className="casino-list-item-banner"
            style={{backgroundImage:`url(${item})`}}
          ></div>
        </Link>
      </div>
      )
    })}
    </>
  );
};

export default CasinoCard;
