import { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider'
import axios from 'axios';
import Swal from 'sweetalert2';

const AddVoluteerPage = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
  
    const [startDate, setStartDate] = useState(new Date())
  
    const handleFormSubmit = async e => {
      e.preventDefault()
      const form = e.target
      const post_title = form.title.value
      const user_email = user?.email
      const user_name=user?.displayName
      const deadline = startDate
      const category = form.category.value
      const volunteers = form.volunteers.value
      const description = form.description.value
      const Thumbnail = form.Thumbnail.value
      const Location = form.Location.value
      const Data = {
        post_title, deadline,category,volunteers, description,user_email ,user_name,Thumbnail,Location
      }
    console.log(Data)
      ////////// data post in database data post in database
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/AddPost`, Data )
        console.log(data)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Add Post Successfully",
            showConfirmButton: false,
            timer: 3000
          });
        navigate('/')
      }
      
      catch (err) {
        console.log(err)
      }
    }

    return (

       <div className="  "  style={{backgroundImage:'url(https://i.ibb.co/dtpMPYf/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector-1017-48268-1.jpg)'}}    >
                     
        <div className='flex hero-overlay bg-opacity-1 justify-center items-center my-12'    >
        <section className=' border-2 border-amber-300 my-4 p-2 md:p-6 mx-auto  bg-slate-300 rounded-md shadow-md '>
          <div className=' mb-4 border-b-4 border-cyan-400   p-2  ' >
          <h2 className=' tracking-[.25em]  text-3xl font-bold text-gray-700 text-center uppercase'>
          Add Volunteer Post 
          </h2>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className='grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' >
                Post Title
                </label>
                <input
                  id='Title'
                  name='title'
                  type='text'
                  required
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
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Deadline</label>
  
                {/* Date Picker */}
                <DatePicker
                  className='border w-full  p-2 rounded-md'
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                />
              </div>
  
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700 '>
                  Category
                </label>
                <select
                  name='category'
                  id='category'
                  className='border p-2 rounded-md'
                >
                  <option value='healthcare'>healthcare</option>
                  <option value='education'>education</option>
                  <option value='social service'>social service</option>
                  <option value='animal welfare'>animal welfare</option>
                </select>
              </div>
              <div>
                <label className='text-gray-700 ' >
                Thumbnail
                </label>
                <input
                  id='Thumbnail'
                  name='Thumbnail'
                  required
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
                  required
                  name='Location'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
              <label className='text-gray-700 '>
              Organizer Email
              </label>
              <input
                id='emailAddress'
                required
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
  
            <div>
              <label className='text-gray-700 ' >
              Organizer  Name
              </label>
              <input
                id='name'
                required
                type='name'
                name='name'
                disabled
                defaultValue={user?.displayName}
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
                required
                id='description'
              ></textarea>
            </div>
            <div className='flex justify-start mt-2 '>
              <button className='px-8 py-2.5 leading-5 outline outline-lime-600 bg-gradient-to-r from-violet-500 to-fuchsia-500  outline-offset-2 outline-4 text-xl font-medium text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Add Post 
              </button>
            </div>
          </form>
         
        </section>
      </div> 
       </div>
    );
};

export default AddVoluteerPage;