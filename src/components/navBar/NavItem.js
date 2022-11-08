import { Link } from 'react-router-dom'

const NavItem = (props) => {
    return(        
        <li className="nav-item ">
            {/* {<a className="nav-link "  href="#"> { props.item }</a>} */}
            <Link className="nav-link " to={props.href}>{ props.item } </Link>
        </li>  
    )

}

NavItem.defaultProps = {
    item: 'Page'
   }
export default NavItem;