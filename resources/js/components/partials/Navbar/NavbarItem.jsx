import {Link} from "@inertiajs/inertia-react";

const NavbarItem = () => {
    return (
        <ul className="navbar__link-ul">
            <li><Link href={"#about"} className={"navbar__link"}>About</Link></li>
            <li><Link href={"#about"} className={"navbar__link"}>Experience</Link></li>
            <li><Link href={"#about"} className={"navbar__link"}>Projects</Link></li>
            <li><Link href={"#about"} className={"navbar__link"}>Contact</Link></li>
            <li>
                <a href="https://resume.io/r/ufu830LwG" target="_blank" className="navbar__link-resume">Resume</a>
            </li>
        </ul>
    )
}

export default NavbarItem;
