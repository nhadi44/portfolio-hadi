const Hero = () => {
    const handleDownloadCv = () => {
        window.open("https://resume.io/r/ufu830LwG", "_blank");
    };

    return (
        <div className="hero">
            <div
                className="hero__background-img"
                style={{
                    backgroundImage: 'url("/assets/images/background.jpg")',
                }}
            ></div>

            <div className="hero__overlay">
                <div className="hero__content">
                    <h4 className="hero__subtitle mb-1">Hi, my name is</h4>
                    <h1 className="hero__title">Hadi Nurhidayat</h1>
                    <h2 className="hero__title mb-1">
                        I am a full-stack web developer
                    </h2>

                    <p className="hero__description">
                        I am very interested in studying and implementing
                        current website technology. Currently, I am working at
                        the{" "}
                        <a
                            href="https://www.indocyber.co.id/"
                            className="font-bold"
                        >
                            Indocyber Global Teknologi
                        </a>{" "}
                        company as a full-stack developer.
                    </p>
                    <button
                        className="hero__btn-resume"
                        onClick={handleDownloadCv}
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
