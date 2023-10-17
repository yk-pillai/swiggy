import UserContext from "../utils/userContext";
import { useContext } from "react";
const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="p-2 m-2 text-center text-orange-700">
      Created by <span className="font-bold">{user.name}</span>
    </div>
  );
};
 export default Footer;
