import React, {useState, useEffect} from "react";
import {Link} from "@inertiajs/inertia-react";
import NavbarItem from "@/components/partials/Navbar/NavbarItem.jsx";
import Offcanvas from "@/components/partials/Offcanvas/index.jsx";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleResize = () => {
        if (window.innerWidth < 430) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        handleResize();
    }, []);

    return (
        <nav className={`navbar ${visible ? "top-0" : "-top-20"}`}>
            <div className="navbar__background">
                <div className="navbar__wrapper">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link className="font-bold text-xl" href={"/"}>
                                    <img
                                        src="/assets/icons/android-chrome-512x512.png"
                                        alt="navbar-brand"
                                        className="navbar__brand-img"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            {isMobile ? <Offcanvas/> : <NavbarItem/>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
