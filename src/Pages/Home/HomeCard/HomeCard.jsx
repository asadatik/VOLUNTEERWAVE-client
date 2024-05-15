import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const HomeCard = ({card}) => {

    const {post_title,Thumbnail ,_id,deadline,category} = card;
    return (
        
        <div       data-aos="zoom-in-down "    >
          <div className=" h-96 lg:h-72 p-4  mt-8 bg-gradient-to-r from-sky-700 to-indigo-500 rounded-lg shadow-xl">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-36 h-36 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={Thumbnail}/>
      </div>

     <h2 className="mt-2 text-2xl font-bold  text-gray-800 dark:text-white md:mt-0">{post_title}  </h2>
          <div className="text-center" >
          <p  className=" mt-1 text-xl font-bold  text-gray-800 dark:text-white md:mt-0"> Category : <span className=" text-indigo-900 uppercase " >{category}</span> </p>  
          <p   className=" mt-1 text-xl font-bold  text-gray-800 dark:text-white md:mt-0">  Deadline  : <span className=" text-indigo-900 uppercase " >{new Date(deadline).toLocaleDateString()}</span>                                  </p>  
          </div>
      <div className="mt-2 flex justify-end  "   > <Link to={`/post/${_id}`} > <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white text-lg  " > View Details </button>  </Link> </div>
     
</div>
        </div>
    );
};

export default HomeCard;