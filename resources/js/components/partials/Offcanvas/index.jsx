import { useEffect, useState } from "react";
import MenuIcon from "@/components/Icons/MenuIcon.jsx";
import Button from "@/components/partials/Button/index.jsx";
import OffcanvasBody from "@/components/partials/Offcanvas/OffcanvasBody.jsx";

const Offcanvas = () => {
    const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(false);

    const handleOffcanvas = () => {
        setIsOpenOffcanvas(!isOpenOffcanvas);
    };

    return (
        <>
            <Button onclick={handleOffcanvas}>
                <MenuIcon classname={"h-7 w-7 text-white"} />
            </Button>

            <div
                className={`offcanvas__overlay ${
                    isOpenOffcanvas ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={handleOffcanvas}
            ></div>
            <div
                className={`offcanvas bg-white ${
                    isOpenOffcanvas ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <OffcanvasBody isOffcanvas={setIsOpenOffcanvas} />
            </div>
        </>
    );
};

export default Offcanvas;
