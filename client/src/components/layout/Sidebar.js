import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlinePlusSquare, AiOutlineForm } from "react-icons/ai";
import { TbRosetteNumber1, TbRosetteNumber2, TbRosetteNumber3 } from "react-icons/tb";
import Wrapper from "../../assets/wrappers/Sidebar";
import { useAppContext } from "../../context/appContext";
import Logo from "./Logo";

export default function SideBar() {
  const { showNav, toggleNav } = useAppContext();
  return (
    <Wrapper>
      <div className={`${showNav ? "nav-container show-nav" : "nav-container"}`}>
        <button className="btn-close" onClick={toggleNav}>
          x
        </button>
        <div className="container">
          <div className="logo-container">
            <Logo />
            Grocerify
          </div>
          <div className="link-container">
            <Link to="/">
              <li className="link-item">
                <MdOutlineLocalGroceryStore />
                Active lists
              </li>
            </Link>
            <div className="sub-link-container">
              <Link to="/">
                <li className="link-item">
                  <TbRosetteNumber1 />
                  List 1
                </li>
              </Link>
              <Link to="/">
                <li className="link-item">
                  <TbRosetteNumber2 />
                  List 2
                </li>
              </Link>
              <Link to="/">
                <li className="link-item">
                  <TbRosetteNumber3 />
                  List 3
                </li>
              </Link>
            </div>
            <Link to="/">
              <li className="link-item">
                <AiOutlineForm />
                Create list
              </li>
            </Link>
            <Link to="/">
              <li className="link-item">
                <AiOutlinePlusSquare />
                Join list
              </li>
            </Link>
          </div>
          <div className="credits-container">@Tudorica Eric {new Date().getFullYear()}</div>
        </div>
      </div>
    </Wrapper>
  );
}
