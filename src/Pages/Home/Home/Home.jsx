import { Link, useLoaderData } from "react-router-dom";

import HomeCard from "../HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";
import Slidertt from "./Slidertt";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

import { MdAttachEmail } from "react-icons/md";
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

        <section className="min-h-screen   bg-base-300   ">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
                <h1 className="text-2xl font-semibold  capitalize  lg:text-3xl">Let’s talk</h1>

                <p className="mt-4 text-slate-600">
                    Ask us everything and we would love
                    to hear from you
                </p>

                <form className="mt-12">
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-xl text-amber-600">Full Name</label>
                            <input type="text"  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-xl text-amber-600">Email address</label>
                            <input type="email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-xl text-amber-600">Message</label>
                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        get in touch
                    </button>
                </form>
            </div>

            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                <img className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg> */}
                          <FaLocationDot className=""  />
                        <span className="mx-2    truncate w-72 text-lime-600">
                           Dhaka,Bangladesh
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg> */}
                            <FaPhoneVolume className=""   />
                        <span className="mx-2 truncate w-72 text-lime-600">(257) 563-7401</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg> */}
                        <MdAttachEmail    className=""  />
              
                        <span className="mx-2 truncate w-72 text-lime-600"> VolunteerWave101@email.com    </span>
                    </p>
                </div>

               
            </div>
        </div>
    </div>
</section>


      </div>


        </div>
    );
};

export default Home;