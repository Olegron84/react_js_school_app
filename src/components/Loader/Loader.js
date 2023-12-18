import { Oval } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="overlay">
      <Oval
        height="250"
        width="250"
        color="#fefe05"
        secondaryColor="#08b1f9"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        strokeWidth={2}
        strokeWidthSecondary={2}
        className="loader"
      />
    </div>
  );
};
export default Loader;
