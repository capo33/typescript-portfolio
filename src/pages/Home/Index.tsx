import Info from "../../components/Info/Index";
import { InfoObjOne, InfoObjTwo } from "../../Data/InfoComponentsData";

const Home = () => {
  return (
    <div>
      <Info {...InfoObjOne} />
      <Info {...InfoObjTwo} />
     </div>
  );
};

export default Home;
