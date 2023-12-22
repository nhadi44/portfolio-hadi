import DefaultLayout from "../Layout/Default";
import Section from "@/components/partials/Section/index.jsx";
import Hero from "@/components/partials/Hero/index.jsx";

const Homepage = ({title}) => {

    return (
        <DefaultLayout title={title}>
            <Section classname={"h-screen"} sectionId={"hero"}>
                <Hero/>
            </Section>
            <Section classname={"h-screen bg-[#000201]"} sectionId={"about"}>About</Section>
            <Section classname={"h-screen"} sectionId={"experience"}>Experience</Section>
        </DefaultLayout>
    );
};

export default Homepage;
