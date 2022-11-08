import DropdownItem from "./DropdownItem";
const NavDropdown = (props) => {
    return(        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{props.itemDropdown}</a>
          <ul className="dropdown-menu">
          <DropdownItem/>
          <DropdownItem/>
          </ul>
        </li>
    )
}
NavDropdown.defaultProps = {
    itemDropdown: 'Page'
   }
export default NavDropdown;