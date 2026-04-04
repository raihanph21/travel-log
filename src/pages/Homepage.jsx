import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <h1>
        <PageNav />
        <AppNav />
        homepage
      </h1>
      <NavLink to="/app">Go to the App</NavLink>
    </div>
  );
}

export default Homepage;
