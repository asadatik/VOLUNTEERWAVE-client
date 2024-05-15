import { Link, useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
const VolunteerDtls = () => {

        const Post = useLoaderData()
        console.log(Post)
        const {
            post_title, deadline,category,volunteers, description,user_email ,
            user_name,Thumbnail,Location,_id
            } = Post || {}


console.log(volunteers)

    return (
        <div   >
            <Helmet>
                 <title>
                     Volunteer Details || {post_title} 
                    </title> 
                </Helmet> 
    <section className="bg-white border-8 border-y-cyan-600 border-x-yellow-400   dark:bg-gray-900">
    <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

        <div
            className="container flex flex-col justify-center  mt-20 px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-xl font-bold  uppercase lg:text-3xl text-sky-400">
                     {post_title} 
            </h1>

            <div className="mt-10  lg:flex lg:items-center">
                <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src={Thumbnail} alt=""/>

                <div className=" lg:px-10 lg:mt-0">
                    <h1   className=" text-gray-800 dark:text-white text-3xl font-bold  ">
                       Category :  <span className="uppercase  text-sky-300   " >{category}</span>.
                    </h1>

                    <p className="text-lg my-4 dark:text-white ">
                       {description}
                    </p>
                        
                         <div className="mb-2">
                             <p className="text-white text-2xl flex gap-2 "  ><FaLocationDot className="text-green-400 text-3xl "  />  {Location}       </p>     
                         </div>
                     <div className="lg:flex border-y-4 py-2 border-cyan-500  gap-6  dark:text-white text-3xl font-bold   " >
                        <h1 className=" border-r-4 border-fuchsia-600 lg:pr-6 " >Deadline : {new Date(deadline).toLocaleDateString()}</h1>    
                        <h1>Volunteers needed : {volunteers}             </h1>
                    </div>  
                    <div className=" my-4  dark:text-white text-3xl font-bold   " >
                        <h1 className=" mb-2  " >Organizer Name : <span className="text-teal-300" >{user_name}</span>.</h1> 

                        <h1> Email Address : <span className="text-teal-300" >{user_email}</span>     </h1>
                    </div>
                     <div>
                       {
                        volunteers===0 ? <div>
                           <button  className="btn  disabled bg-gradient-to-r text-xl text-black  from-indigo-500 via-purple-500 to-pink-500 ..."  > Be a Volunteer </button> 
                   </div> :  <div>
                         <Link to={`/be/${_id}`}  >  <button className="btn bg-gradient-to-r text-xl text-black  from-indigo-500 via-purple-500 to-pink-500 ..."  > Be a Volunteer </button> </Link>
                    </div>   
                       }
                      
                     </div>
                               </div> 
                              </div>

         
        </div>
    </div>
</section>
  
    </div>
    );
};

export default VolunteerDtls;