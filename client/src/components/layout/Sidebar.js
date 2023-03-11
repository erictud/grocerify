import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlinePlusSquare, AiOutlineForm } from "react-icons/ai";
import { TbRosetteNumber1, TbRosetteNumber2, TbRosetteNumber3 } from "react-icons/tb";
import Wrapper from "../../assets/wrappers/Sidebar";
import { useAppContext } from "../../context/appContext";

export default function SideBar() {
  const { showNav } = useAppContext();
  return (
    <Wrapper>
      <div className={`${showNav ? "nav-container show-nav" : "nav-container"}`}>
        <h2 className="logo-container">Grocerify</h2>

        <ul className="link-list">
          <Link to="/">
            <li className="link-item">
              <MdOutlineLocalGroceryStore />
              Your lists
            </li>
          </Link>
          <div className="lists">
            <Link to="/">
              <li className="link-item">
                <TbRosetteNumber1 />
                list 1
              </li>
            </Link>
            <Link to="/">
              <li className="link-item">
                <TbRosetteNumber2 />
                list 2
              </li>
            </Link>
            <Link to="/">
              <li className="link-item">
                <TbRosetteNumber3 />
                list 3
              </li>
            </Link>
          </div>
          <Link to="/">
            <li className="link-item">
              <AiOutlinePlusSquare />
              create a list
            </li>
          </Link>
          <Link to="/">
            <li className="link-item">
              <AiOutlineForm />
              join a list
            </li>
          </Link>
        </ul>
        <div className="credits">@Tudorica Eric {new Date().getFullYear()}</div>
      </div>
    </Wrapper>
  );
}
