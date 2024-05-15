
const Slider = () => {
    return (
        <div className="carousel h-[700px] w-full ">
            <div id="slide1" className="carousel-item relative w-full">
            <img src={""} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0    bg-gradient-to-r from-neutral-550 ...   ">
                    <div className='text-white lg:space-y-7 pl-10 '>
                        <h2 className='lg:text-5xl text-amber-300 font-bold'>Join Hands, Change Lives: Volunteer Today !</h2>
                        <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                        Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                        </p>
                       
                    </div>
                </div>
                <div className="absolute flex justify-evenly transform -translate-y-1/2 left-5 right-5 bottom-10">
                <a href="#slide4" className="btn text-xl bg-white   ">❮</a> 
                    <a href="#slide2" className="btn text-xl bg-white ">❯</a>
                    
                </div>
               

            </div>

            <div id="slide2" className="carousel-item relative w-full">
            <img src={'https://i.ibb.co/rsxy424/pexels-shvetsa-5029919-1.jpg'} className="w-full rounded-xl" />

                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-neutral-950 ... ">
                    <div className='text-white space-y-7 pl-10 '>
                        <h2 className='lg:text-5xl text-amber-300 font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                        <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                        Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                        </p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-evenly transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide1" className="btn text-xl bg-white ">❮</a>
                    <a href="#slide3" className="btn text-xl bg-white ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={""} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-neutral-950 ... ">
                    <div className='text-white space-y-7 pl-10'>
                        <h2 className='lg:text-5xl  text-amber-300  font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                        <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                        Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                        </p>
                       
                    </div>
                </div>
                <div className="absolute flex justify-evenly transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide2" className="btn text-xl bg-white ">❮</a>
                    <a href="#slide4" className="btn text-xl bg-white ">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={""} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center  h-full left-0 top-0   bg-gradient-to-r from-neutral-950 ... ">
                    <div className=' space-y-7  pl-10'>
                        <h2 className='lg:text-5xl text-cyan-600  font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                        <p className="text-xl text-amber-300 " >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                        Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                        </p>
                       
                    </div>
                </div>
                <div className="absolute flex justify-evenly transform -translate-y-1/2 left-5 right-5 bottom-10">
                    <a href="#slide3" className="btn text-xl bg-white ">❮</a>
                    <a href="#slide1"className="btn text-xl bg-white ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;