const DropdownItem = (props) => {
    return( 
        <li><a className="dropdown-item" href="#">{props.dropdownList}</a></li>
    )

}

DropdownItem.defaultProps = {
    dropdownList: 'Page'
   }
export default DropdownItem;