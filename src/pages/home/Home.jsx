
import Blink from "../../components/blink/Blink.jsx";
import OddsRow from "../../components/odds/OddsRow.jsx";
import OddsRowHeading from "../../components/odds/OddsRowHeading.jsx";
const Home = () => {
  return (
    <>
    <div className="w-full grid grid-cols-4 gap-1">
   <Blink/>
   <Blink/>
   <Blink/>
   <Blink/>
    </div>
  <OddsRowHeading/>
    <OddsRow/>
    <OddsRow/>
    <OddsRow/>
    <OddsRow/>
    </>
  );
};

export default Home;
