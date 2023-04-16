import heroImage from "../assets/hero1.jpg"


const Hero = () => {
    
    return (
        <div className="text-light vh-100">

            <div className="hero-bg-image">
                {/* <div className="bg-black opacity-50"></div>
                <img className="hero-img" src={heroImage} /> */}
            </div>

            <div className="hero-text">
                <h2 className="bigger-text main-text-first-line">I'm a</h2>
                <h2 className="bigger-text mt-2">web developer</h2>
                <p className="mt-3">Also passioned about video games.</p>

                <div className="mt-4 position-relative">
                    <button className="btn btn-outline-primary d-flex align-items-center">
                        <i className="bi bi-question-circle fs-2 text-light pe-2"></i>
                        sobre mi
                    </button>
                    <p className="position-absolute fixed-top mt-3 ms-5"></p>
                </div>
            </div>

        </div>
        
    )

}

export { Hero }