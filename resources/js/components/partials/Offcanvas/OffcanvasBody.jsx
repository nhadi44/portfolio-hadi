import {Link} from "@inertiajs/inertia-react";
import Button from "@/components/partials/Button/index.jsx";
import Xicon from "@/components/Icons/Xicon.jsx";

const OffcanvasBody = ({isOffcanvas}) => {
    return (
        <div className={"offcanvas__body"}>
            <Button classname={"offcanvas__close"} onclick={() => isOffcanvas(false)}>
                <Xicon classname={"w-7 h-7 text-slate-900"}/>
            </Button>
            <div className={"offcanvas__body-link"}>
                <Link href={"#about"} className={"offcanvas__link"}>About</Link>
                <Link href={"#about"} className={"offcanvas__link"}>Experience</Link>
                <Link href={"#about"} className={"offcanvas__link"}>Projects</Link>
                <Link href={"#about"} className={"offcanvas__link"}>Contact</Link>
                <a href={"https://resume.io/r/ufu830LwG"} className={"offcanvas__link-resume"}
                   target={"_blank"}>Resume</a>
            </div>
        </div>
    )
}

export default OffcanvasBody;
