const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">About Me</h1>
            <div className="about__content">
                <div className="col-span-1">
                    <p className="about__paragraph">
                        Hello! My name is Hadi Nurhidayat. I am very interested
                        in web development, starting in 2020. I first became
                        interested because, when I worked at an insurance
                        company, I was given the challenge of creating a
                        website-based employee productivity system by my boss.
                    </p>
                    <p className="about__paragraph">
                        Since then, I have started to relearn the basics of web
                        programming, such as HTML, CSS, Javascript, and PHP.
                    </p>
                    <p className="about__paragraph">
                        Not only that, I also attended a bootcamp to deepen my
                        skills in the world of web development .Until now, I
                        have worked at Indocyber Global Technology as a
                        full-stack developer.
                    </p>
                    <p className="about__paragraph">
                        The skills that I currently master are:
                        <div className="grid grid-cols-2 mt-3 px-5">
                            <ul className="list-disc">
                                <li>Javascript</li>
                                <li>ReactJs</li>
                                <li>NodeJs</li>
                            </ul>
                            <ul className="list-disc">
                                <li>Laravel</li>
                                <li>VueJs</li>
                                <li>NextJs</li>
                            </ul>
                        </div>
                    </p>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
};

export default About;
