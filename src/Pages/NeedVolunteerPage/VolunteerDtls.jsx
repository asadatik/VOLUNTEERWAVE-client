import { useLoaderData } from "react-router-dom";

const VolunteerDtls = () => {

        const Post = useLoaderData()
        console.log(Post)
        const {
            post_title, deadline,category,volunteers, description,user_email ,
            user_name,Thumbnail,Location
            } = Post || {}




    return (
        <div>
             <h1> Details Of {post_title} </h1>   
   
    <div className="container flex flex-col border-8 border-y-cyan-600 border-x-yellow-400  px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
           
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo"/>
        </div>
    </div>
  
        </div>
    );
};

export default VolunteerDtls;