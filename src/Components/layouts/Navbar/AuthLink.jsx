import { FaRegUserCircle } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

const AuthLink = ({ user, onClick, className = "" }) => {

  return user ? (
    <Link
      to="/profile"
      onClick={onClick}
      className={`flex items-center gap-2 hover:text-primary ${className}`}
    >
      <FaRegUserCircle size={22} />
      Profile
    </Link>
  ) : (
    <Link
      to="/auth/sign_in"
      onClick={onClick}
      className={`flex items-center gap-2 hover:text-primary ${className}`}
    >
      <LuUser size={22} />
      Sign In
    </Link>
  );
};
export default AuthLink;