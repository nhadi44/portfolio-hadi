import { Head } from "@inertiajs/inertia-react";
import DefaultLayout from "../Layout/Default";

const Homepage = ({ title }) => {
    return (
        <DefaultLayout title={title}>
            <h1>Homepage</h1>
        </DefaultLayout>
    );
};

export default Homepage;
