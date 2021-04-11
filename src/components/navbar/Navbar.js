import NavbarLink from './NavbarLink'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="./#banner">Francisco</a>
            </div>
            <ul>
                <NavbarLink href="/#banner" text="Profesión" />
                <NavbarLink href="/#portfolio" text="Portafolio" />
                <NavbarLink href="/#experience" text="Experiencia" />
                <NavbarLink href="/#contact" text="Contacto" />
                <NavbarLink href="/#footer" text="Sobre Mi" />
            </ul>
            
        </nav>
    )
};

export default Navbar

