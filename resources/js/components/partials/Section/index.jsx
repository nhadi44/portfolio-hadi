const Section = ({children, classname, sectionId}) => {
    return (
        <section className={classname} id={sectionId}>
            {children}
        </section>
    )
}

export default Section;
