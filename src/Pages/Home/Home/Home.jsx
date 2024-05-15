import { Link, useLoaderData } from "react-router-dom";

import HomeCard from "../HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";
import Slidertt from "./Slidertt";


const Home = () => {
      const data = useLoaderData()
        console.log(data)
    return (
        <div>
       <Helmet>

        <title> VOLUNTEERWAVE || Home </title>
       </Helmet>

          <div  >
         
            <Slidertt></Slidertt>
          </div>
           {/* Home Card  */}
          <div className="mt-10"  >
            
                      <h1  className=" text-center   uppercase text-sky-800 tracking-[.25em] font-bold text-3xl" > Volunteer Needs Now</h1>
                   <hr className="container mx-auto mt-4  border-b-4   " />
             <div  className="grid p-2 mt-10 lg:grid-cols-3 container mx-auto gap-10 "   >
               {data.map(singleData=> <HomeCard key={singleData._id}   card={singleData}   >      </HomeCard>              )         }
             </div>

         <Link to='/need' >  <div className="flex  justify-end container mx-auto mt-4  " >
            <a  className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        <div className="flex items-center -mx-1">
            <span className="mx-1 text-xl ">
            See all
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path   d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
             </a>
          </div>     </Link>

          
           {/*  */}
        </div>
            {/* end home card */}



           {/*extra 2 section  */}
        <div className="my-10"   >
          {/* SECTION 1 */}
                     <section className="bg-sky-300 ">
       <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold  text-black capitalize lg:text-3xl ">explore our <br/>   Golden Achievements  </h1>

        <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-6 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-4 lg:w-1/2  md:grid-cols-2">
                <div className="">
                   

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Community Impact Award:</h1>

                    <p className="text-slate-800 mt-2 ">
                    Recognized for our exceptional dedication to improving our community, this prestigious award celebrates our efforts in fostering positive change. Through initiatives such as [mention specific projects or programs], we have empowered individuals, revitalized neighborhoods, and created a more vibrant and inclusive community.
                    </p>
                    <button className=" p-1 rounded-xl mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white text-lg  " > Explore More... </button> 
                </div>

                <div className="">
                    

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Volunteer of the Year:</h1>

                    <p className="text-slate-800 m-2 ">
                    This esteemed title honors one of our exceptional volunteers who has demonstrated unwavering commitment, dedication, and selflessness. Their tireless efforts in [mention specific activities or initiatives] have not only inspired others but also brought about tangible benefits to those we serve.
                    </p>
                    <button className=" p-1 rounded-xl mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white text-lg  " > Explore More... </button> 
                </div>

                <div className="">
                   

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Service Excellence Recognition:</h1>

                    <p className="text-slate-800 m-2 ">
                    
                    Awarded for our commitment to service excellence, this recognition underscores our organization`s dedication to making a meaningful impact in the lives of others. Whether it`s through [mention specific volunteer activities or programs], we continuously strive to uphold the highest standards of service and compassion.
                    <button className=" p-1 rounded-xl mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white text-lg  " > Explore More... </button> 
                    </p>
                </div>

                <div className="">
                  

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Environmental Stewardship Initiative:</h1>

                    <p className="text-slate-800  m-2">
                    Our organization spearheaded an Environmental Stewardship Initiative aimed at promoting sustainability and preserving our planet`s natural resources. Through community clean-up events, tree planting campaigns, and educational workshops on eco-friendly practices, we raised awareness and inspired action to protect the environment.
                    <button className=" p-1 rounded-xl mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white text-lg  " > Explore More... </button> 
                    </p>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://i.ibb.co/mFvyCrx/hand-drawn-community-spirit-illustration-23-2150188732-1.jpg" alt=""/>
            </div>
        </div>
    </div>
                    </section>  
        {/* section 2 */}


      </div>


        </div>
    );
};

export default Home;