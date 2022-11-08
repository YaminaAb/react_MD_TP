import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-opacity-25  ">
      <div className="container-fluid container">
            <a className="navbar-brand" href="#">{props.logo}</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavItem item ={'Acceuil'}  href={'/'}/>
                <NavItem item ={'Présentation'} href={'/presentation'}/>
                <NavDropdown itemDropdown ={'Shop'} />
              </ul>                
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
