import { Link } from "react-router-dom";
import logo from '../assets/logo.jpeg'; // Adjust the path as needed

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      
      <img src={logo} alt="Unseen Logo" className="h-14 mr-2" />

      
      <span className="self-center text-lg font-semibold whitespace-nowrap">
        Unseen Collection
      </span>
    </Link>
  );
};

export default Logo;
