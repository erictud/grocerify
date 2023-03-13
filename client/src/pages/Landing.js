import Wrapper from "../assets/wrappers/LandingPage";
import landingImage1 from "../assets/images/landing-1.svg";
import { Logo } from "../components/index";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Wrapper>
      <header className="logo-container">
        <Logo />
        <h2>Grocerify</h2>
      </header>
      <main className="main-section">
        <div className="main-section__column-1">
          <h1>Grocery List App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eum quisquam.
            Dignissimos iste reiciendis voluptatem sapiente qui, vel esse id, aut rem assumenda
            saepe nihil obcaecati mollitia unde illum aliquam?
          </p>
          <Link to="/register">
            <button className="btn-block">Login / Register</button>
          </Link>
        </div>
        <div className="main-section__column-2">
          <img src={landingImage1} alt="Grocery cart" />
        </div>
      </main>
    </Wrapper>
  );
}
