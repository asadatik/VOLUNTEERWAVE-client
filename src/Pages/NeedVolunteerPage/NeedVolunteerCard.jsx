import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const NeedVolunteerCard = ({volunteer}) => {
    const {
        post_title, description,Thumbnail ,_id,volunteers} = volunteer;
 
        const disable = ( ) =>{
            Swal.fire({
                icon: "error",
                title: "Oops...Sorry ",
                 text: "No Needed Volunteer At This Moment!",
            
          });     
        }
        



     
    return (
        <div    data-aos="flip-up"
        data-aos-duration="2000"  >
          <div className=" h-72 p-4 mt-14 lg:mt-8 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-xl">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-36 h-36 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={Thumbnail}/>
      </div>

     <h2 className="mt-2  font-bold  text-gray-800 dark:text-white md:mt-0">{post_title}  </h2>

      <p className="mt-2 lg:ml-4 text-base font-medium  text-amber-300  ">{description.substring(0, 100)}....  </p>
      {/* <div className="mt-6"   > <Link to={`/post/${_id}`} >  <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white text-lg  " > View Details </button>  </Link> </div> */}
        <div  className="mt-4" >
        {
                        volunteers===0 ? <div>
                           <button onClick={disable} className="btn  disabled bg-gradient-to-r text-xl text-black  from-indigo-500 via-purple-500 to-pink-500 ..."  >  View Details </button> 
                   </div> :  <div>
                         <Link to={`/post/${_id}`}  >  <button className="btn bg-gradient-to-r text-xl text-black  from-indigo-500 via-purple-500 to-pink-500 ..."  >  View Details</button> </Link>
                    </div>   
                       }
        </div>
</div>
        </div>
    );
};

export default NeedVolunteerCard;