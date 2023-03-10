import Wrapper from "../../assets/wrappers/Navbar";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "./Logo";
import RoFlag from "../../assets/images/roFlag.png";
import UkFlag from "../../assets/images/ukFlag.png";

export default function Navbar() {
  return (
    <Wrapper>
      <button className="nav-button">
        <RiBarChartHorizontalLine />
      </button>
      <div className="logo-container">
        <span>
          <AiOutlineShoppingCart />
        </span>
        Grocerify
      </div>
      <div className="info-container">
        <div className="user-container">
          <div className="user-img">U</div>
          <h4 className="username">Username</h4>
        </div>
        {/* <div className="language-container">
          <button className="flag">
            <img src={RoFlag} alt="romanian flag" />
          </button>
          <button className="flag">
            <img src={UkFlag} alt="uk flag" />
          </button>
        </div> */}
      </div>
    </Wrapper>
  );
}
