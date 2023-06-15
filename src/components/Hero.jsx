import Logo from '../assets/logo.svg'

function Hero() {
  return (
    <section className="hero-main">
        <div className="a text-center mx-auto">
            <h3 className="d text-[22px] lato font-bold uppercase py-8 flex justify-center items-center gap-2"> <img src={Logo} alt="" className='main-logo' /> BUIDL</h3>
            <div className="c py-12 text-center mx-auto con">
            <h1 className="d text-5xl sm:text-7xl frank font-[500] max-w-full w-[800px] mx-auto">
            Great things coming soon...
            </h1>

<br/>
            <p className="lato text-lg font-normal">We are a small and growing community with big ideas.</p>
            <br/>

            <div>
                <button className="btn px-8 py-2 my-6 text-sm font-[700] lato">Join Now &nbsp; →</button>
            </div>
            </div>

        

        </div>


    </section>
  )
}

export default Hero