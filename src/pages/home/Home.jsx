
import Blink from "../../components/blink/Blink.jsx";
import HomeTab from "../../components/hometab/HomeTab.jsx";

const Home = () => {
  return (
    <>
    <div className="w-full grid grid-cols-4 gap-1">
   <Blink/>
   <Blink/>
   <Blink/>
   <Blink/>
    </div>
    <HomeTab/>
    </>
  );
};

export default Home;
