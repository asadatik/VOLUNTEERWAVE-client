import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import HomeCard from "../HomeCard/HomeCard";

const Home = () => {
      const data = useLoaderData()
        console.log(data)
    return (
        <div>
           <Slider></Slider>
           {/* Home Card  */}
          <div>
          <div  className="grid p-2 mt-20 lg:grid-cols-3 container mx-auto gap-10 "   >
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

          </div>
           {/*  */}
        </div>
    );
};

export default Home;