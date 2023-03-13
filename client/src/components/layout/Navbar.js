import Wrapper from "../../assets/wrappers/Navbar";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useAppContext } from "../../context/appContext";

export default function Navbar() {
  const { toggleNav } = useAppContext();

  return (
    <Wrapper>
      <div className="navbar">
        <button onClick={toggleNav} className="btn-open">
          <RiBarChartHorizontalLine />
        </button>
        <h3 className="title">List wow</h3>
        <div className="user-container">
          <h3>U</h3>
          <h4>username</h4>
          <IoIosArrowDown />
        </div>
      </div>
    </Wrapper>
  );
}
