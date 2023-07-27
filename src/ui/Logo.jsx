import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/assets/logo.svg" alt="Movie logo" />
    </Link>
  );
}

export default Logo;
