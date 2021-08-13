import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <div className="navContainer">
      <Link to="/home">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
