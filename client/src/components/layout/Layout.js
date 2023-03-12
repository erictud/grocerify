import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="page">
        <Sidebar />
        <div className="col-2">
          <Navbar />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
