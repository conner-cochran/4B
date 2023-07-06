import { Link } from "react-router-dom";
//provides the content to show on the main page
const Footer = () => (
  <footer>
    <nav>
      <ul>
        <h1>Welcome to our Recipe Repository.</h1>
        <li>
          <Link to="/Main">Recipe</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
