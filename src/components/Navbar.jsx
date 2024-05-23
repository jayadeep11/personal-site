import { FaBars } from "react-icons/fa";
import logo from "./../assets/logo.png";



const Navbar = (proops) => {
  return (
    <nav className="flex p-6 lg:p-10 items-center" >
      <img src={logo} className="w-10 h-10" />
      <p className="flex-grow font-bold">Jayadeep</p>
      <FaBars onClick={proops.openHeader} className="w-5 h-5" />
    </nav>
  );
};

export default Navbar;
