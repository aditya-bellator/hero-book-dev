
import FilterSlider from "../../components/filterSlider/FilterSlider";
import CasinoCard from "../../components/casinoCard/CasinoCard";
///styles
import "./styles.scss"
const Casino = () => {
  return (
    <div>
      <FilterSlider />
     <div className="casino-container mt-[0.5rem]">
<CasinoCard/>
     </div>
    </div>
  );
};

export default Casino;
