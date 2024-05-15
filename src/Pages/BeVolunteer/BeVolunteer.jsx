import {  useLoaderData, useNavigate } from "react-router-dom";


import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";



const BeVolunteer = () => {
           
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()
        const Post = useLoaderData()
        console.log(Post)
        const {
            post_title, deadline,category,volunteers, description,user_email,
            user_name,Thumbnail,Location,_id
            } = Post || {}

        const status = "requested" ;
            const handleFormSubmit = async e => {
                e.preventDefault()
                const form = e.target
                const post_title = form.title.value
                const volunteerEmail = user?.email
                const VolunteerName=user?.displayName
                const Deadline = deadline;
                const category = form.category.value
                const volunteers = form.volunteers.value
                const description = form.description.value
                const Thumbnail = form.Thumbnail.value
                const Location = form.Location.value
                const Organizer_email = user_email
                const Organizer_name= user_name
                const Suggestion = form.suggestion.value
                const Status =  form.status.value
                const VolunteerId = _id

                const Data = {
                VolunteerId , post_title, Deadline,category,volunteers, description,volunteerEmail ,VolunteerName,Thumbnail,Location,Organizer_email,Organizer_name,Status,Suggestion
                }
              console.log(Data)
                ////////// data post in database data post in database
                try {
                  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/Request`, Data )
                  console.log(data)
                  Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "send Volunteer request Successfully",
                      showConfirmButton: false,
                      timer: 3000
                    });
                  navigate('/need')
                }
                
                catch (err) {
                  console.log(err)
                }
              }

              const handleStatus = async (id) => {
                console.log(id)
                 const {data} =  await axios.patch(`${import.meta.env.VITE_API_URL}/number/${id}`,{Post})         
              console.log(data)
              }

    return (
        <div>
               <Helmet><title> Be Volunteer Of {post_title}   </title></Helmet>
                  <section className=' border-2 border-amber-300 my-4 p-2 md:p-6 mx-auto  bg-slate-300 rounded-md shadow-md '>
          <div className=' mb-4 border-b-4 border-cyan-400   p-2  ' >
          <h2 className=' tracking-[.25em]  text-3xl font-bold text-gray-700 text-center uppercase'>
          Volunteer Request Form
          </h2>
          </div>
          <form    onSubmit={handleFormSubmit}>
            <div className='grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' >
                Post Title
                </label>
                <input
                  id='Title'
                  name='title'
                  type='text'
                  readOnly
                  defaultValue={post_title}
                 
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' >
                No. of volunteers needed
                </label>
                <input
                  id='volunteers'
                  name='volunteers'
                  type='number'
                  readOnly
               defaultValue={volunteers}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Deadline</label>
  
                {/* Date Picker */}
                <input
                  id='deadline'
                  name='deadline'
                  defaultValue= {new Date(deadline).toLocaleDateString()}
                  readOnly
                
               
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />  
              </div>
  
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700 '>
                  Category
                </label>
                <input
                  id=' category'
                  name='category'
                  defaultValue={category}
                  readOnly
                
               
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' >
                Thumbnail
                </label>
                <input
                  id='Thumbnail'
                  name='Thumbnail'
                  readOnly
                  defaultValue={Thumbnail}
                  
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' >
                Location
                </label>
                <input
                  id='Location'
                  readOnly
                  defaultValue={Location}
                  name='Location'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
              <label className='text-gray-700 '>
              Volunteer E-mail 
              </label>
              <input
                id='emailAddress'
                readOnly
              
                type='email'
                name='email'
               
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 '>
              Organizer Email
              </label>
              <input
                id='emailAddress'
                readOnly
                 
                type='email'
                name='email'
               
                defaultValue={user_email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>



            <div>
              <label className='text-gray-700 ' >
            Volunteer Name
              </label>
              <input
                id='name'
               
                type='name'
                name='name'
                readOnly
                defaultValue={user?.displayName}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' >
              Organizer Name
              </label>
              <input
                id='name'
               
                type='name'
                name='name'
                readOnly
                defaultValue={user_name}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' >
              Status
              </label>
              <input
                id='name'
              
                   readOnly
              defaultValue={status}
                type='text'
                name='status'
                 
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' >
              Suggestion
              </label>
              <input
                id='name'
               
                type='text'
                name='suggestion'
               
              
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            </div>
            <div className='flex flex-col  '>
              <label className='text-gray-700 ' >
                
                Description
              </label>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='description'
                readOnly
                defaultValue={description}
                id='description'
              ></textarea>
            </div>
            <div className='flex justify-center mt-6  '>
              <button onClick={() => handleStatus(_id)}   className='px-8 py-2.5  w-1/2 leading-5 outline outline-lime-600 bg-gradient-to-r from-violet-500 to-fuchsia-500  outline-offset-2 outline-4 text-xl font-medium text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Request
              </button>
            </div>
          </form>
         
        </section>

        </div>
    );
};

export default BeVolunteer;