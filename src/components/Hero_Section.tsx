import heroImage from "../assets/hero1.jpg"

const Hero = () => {
    
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content border-2">
            <div className="max-w-md">
                <p className="mb-5 text-9xl font-bold">I'm a</p>
                <p className="mb-5 text-9xl font-bold">web developer</p>
                <p className="mb-5">Also passiones about video games.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    )

}

export { Hero }