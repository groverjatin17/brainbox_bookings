import { useState } from "react";
import arrowUpRight from "./assets/arrowUpRight.svg";
import "./App.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import search from "./assets/search.svg";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const navigate = useNavigate();
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="container">
      <div className="view-section">
        <nav>
          <ul>
            <li>
              <img
                src={search}
                alt="search"
                onClick={() => setSearchActive((prevValue) => !prevValue)}
              ></img>
            </li>
            {searchActive ? (
              <li>
                <input type="text" placeholder="Search..." />
              </li>
            ) : null}

            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
