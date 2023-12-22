import {Head} from "@inertiajs/inertia-react";
import Navbar from "@/components/partials/Navbar/Navbar.jsx";


const DefaultLayout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Navbar/>
                {children}
            </main>
        </>
    );
};

export default DefaultLayout;
