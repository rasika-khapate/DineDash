import { useState } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [logButtonState, setLogButtonState] = useState(true);

  const handleLogging = () => {
    setLogButtonState(!logButtonState);
  };

  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="flex justify-between bg-amber-50 shadow-lg  shadow-blue-100 sm:bg-red-100  lg:bg-purple-200">
        {/* above sm lg classes are equivalent of media queries */}
        <div className="logo-container">
          <img className="h-20" src={CDN_URL} />
        </div>
        <div className="flex items-center pr-4">
          <ul className="flex">
            <li className="p-2">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-2">
              <Link to="#">Cart</Link>
            </li>
            <li className="p-2">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-2">
              <button onClick={handleLogging}>
                {logButtonState ? "Login" : "Logout"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
