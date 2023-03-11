import Wrapper from "../../assets/wrappers/Navbar";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";
import { useAppContext } from "../../context/appContext";

export default function Navbar() {
  const { showNav, toggleNav } = useAppContext();

  return (
    <Wrapper>
      <button className="nav-button" onClick={toggleNav}>
        {showNav ? "X" : <RiBarChartHorizontalLine />}
      </button>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="info-container">
        <div className="user-container">
          <h4 className="username">Username</h4>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
