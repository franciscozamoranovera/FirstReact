
const NavbarLink = (props) => {
    return (
        <li className='navbar__link'>
            <a href={props.href}>{props.text}</a>
        </li>
    )
}

export default NavbarLink
