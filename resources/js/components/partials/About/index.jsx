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
                    </p>
                    <div className="about__list">
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
                </div>
                <div className="col-span-1 px-10">
                    <div className="w-full lg:w-3/4 xl:w-2/4 relative">
                        <div className="bg-slate-900 absolute left-0 top-0 w-full h-full bg-opacity-10 hover:bg-opacity-0 transition-all duration-200 ease-in"></div>
                        <img
                            src="/assets/images/foto.jpg"
                            alt="profile-foto"
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
