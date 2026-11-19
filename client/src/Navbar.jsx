
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="logo">✺ Voices of Heritage</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/stories">Explore Stories</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Navbar;
