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

          <div className=""  >
         
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
        </div>
    );
};

export default Home;