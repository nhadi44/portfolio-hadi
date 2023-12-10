import { Head } from "@inertiajs/inertia-react";

const DefaultLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <h1>Default Layout</h1>
                {children}
            </main>
        </>
    );
};

export default DefaultLayout;
