import logo from "../assets/images/food-logo.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import useIsOnline from "../utils/useIsOnline";
import { useSelector } from "react-redux";
import Store from "../utils/Store";

const Title = () => {
  return (
    <a href="/">
      <img src={logo} className="logo h-24 p-20"></img>
    </a>
  );
};

const Header = () => {
  const {user} = useContext(UserContext);
  const isOnline = useIsOnline();
  const cartItems = useSelector(Store => Store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-center shadow-lg">
      <Title />
      <div className="nav-items m-6 mx-60">
        <ul className="flex">
          <li className="p-3 text-orange-700 text-xl font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 text-orange-700 text-xl font-medium">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 text-orange-700 text-xl font-medium">Contact</li>
          <li className="p-3 text-orange-700 text-xl font-medium">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-3 text-orange-700 text-xl font-medium">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="p-3 text-orange-700 text-xl font-medium ml-96">
            {isOnline ? "🟢 " + user.name : "🔴 " + user.name}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
