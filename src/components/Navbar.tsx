import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#services">Our Services</a></li>
        <li><a href="/#process">Claims Process</a></li>
        <li><a href="/#team">Our Team</a></li>
        <li><a href="/#contactus">
          Contact Us
          <img
            src="https://flagcdn.com/w40/zw.png"
            srcSet="https://flagcdn.com/w80/zw.png 2x"
            width="20"
            alt="Zimbabwe"
            style={{ marginLeft: "8px", verticalAlign: "middle", borderRadius: "2px", marginTop: "-3px" }}
          />
        </a></li>
      </ul>

    </nav>
  );
};


export default Navbar;
