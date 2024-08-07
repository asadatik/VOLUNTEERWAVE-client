import{ useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";     
import { Link } from 'react-router-dom';
import { FcCancel } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
const ManagePost = () => {
    const{user} = useContext(AuthContext); 
    const [handle,setHandle]= useState(false);

        const [item, setItem] = useState([]);
        const [request,setrequest ] = useState([]);
    // posted api 
        console.log(item)
        useEffect(() => {
          fetch(`${import.meta.env.VITE_API_URL}/managepost/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              setItem(data);
            });
        }, [user,handle]);

        const Delete = (id) => {
          console.log(id);
          Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: " delete Confirm!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`${import.meta.env.VITE_API_URL}/AddPost/${id}`, {        
                method: "DELETE",
              
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your Added Post  has been deleted.",
                      icon: "success",
                    });
                    setHandle(!handle)
                  }
                });
            }
          });
        }



    //Requested Api
      
        console.log(request)
        useEffect(() => {
          fetch(`${import.meta.env.VITE_API_URL}/volunteer/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
             setrequest(data);
            });
        }, [user,handle]);

    //  req-cancel

    const cancleReq = (id) => {
      console.log(id);
      Swal.fire({
        title: "Do you Cancel this  Request?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: " Confirm!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_API_URL}/Request/${id}`, {        
            method: "DELETE",
          
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Canceled!",
                  text: "Your Request Have been Canceled.",
                  icon: "success",
                });
                setHandle(!handle)
              }
            });
        }
      });
    }


    return (
       <div  className=' my-16 '       >

             <Helmet> <title>     Manage My Post          </title>           </Helmet>
         
        {/* Table 01 */}
              
            <div > {item.length === 0 ?
              <div className=' lg:m-10 m-4 text-center border-2 border-yellow-400  py-10 ' > 
            
              <div>
              <h2 className='text-3xl font-bold text-black   uppercase '> 
             My ``volunteer request`` Post: <span className='text-green-500 font-bold   '  > {item.length} </span></h2>    
                 <h2 className='mt-2  text-3xl text-red-400 font-semibold  '  >  Empty  your Need Volunteer Post.   </h2>

              </div>
                 <div className='flex justify-center  mt-6'  > <img className=' h-96   '  src={`https://i.ibb.co/f2TKmmd/no-data-concept-illustration-114360-536-1.jpg`} alt="" /> </div>
          
           </div>
             
             :
                   <section className='container p-4   border-4 border-yellow-400 bg-base-300   mx-auto pt-12'>
            <div className='text-center'>
          <h2 className='text-3xl font-bold        '> 
          My ``need volunteer`` Post : <span className='text-green-500 font-bold   '  > {item.length} </span></h2>
  
        </div>
  
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Title</span>
                        </div>
                      </th>
  
                      <th
                        scope='col'
                        className=' py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Deadline</span>
                      </th>
  
                      
  
                      <th
                        scope='col'
                        className=' py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        Category
                      </th>
  
                        
  
                      <th className=' py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
                        Update 
                      </th>
                      <th className=' py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
                        Delete
                      </th>
                      </tr>
                  </thead>
                     
                  <tbody>
                
                 {
                   item?.map(i  => (    
                         <tr   key={i._id} className='font-medium '  >
                      <td className='p-4' > {i. 
post_title
}  </td>  
                   <td>  {new Date(i.deadline).toLocaleDateString()}  </td>
                   <td>  {i.category}  </td>
                
                   <td > <Link to={`/update/${i._id}`} >   <button  className='btn btn-xs h-10  text-xl bg-indigo-400 text-black ' >Update</button>          </Link>
                   
                     </td>
                    <td>
                    <button  onClick={()=>Delete(i._id)}  className='btn btn-xs h-10 text-xl bg-violet-300  text-black ' >delete  <FcCancel className='text-2xl' />  </button>  

                    </td>
                         </tr>
                          
                   ))
                   
                 }
                
           
                        </tbody>
                       
                </table>
              </div>
            </div>
          </div>
        </div>
                   </section> }
               </div>





     {/*Table-2  */}
            <div>      {request.length === 0 ? 
                      <div className=' lg:m-10 m-4  text-center border-2 border-cyan-500 py-10 ' > 
            
                        <div>
                        <h2 className='text-3xl font-bold text-black uppercase      '> 
                       My ``volunteer request`` Post: <span className='text-green-500 font-bold  '  > {request.length} </span></h2>    
                           <h2 className='mt-2 text-3xl text-red-400 font-semibold  '  >  Empty  your Volunteer Request .   </h2>

                        </div>
                           <div className='flex justify-center mt-6 '  > <img  className='h-96' src={`https://i.ibb.co/f2TKmmd/no-data-concept-illustration-114360-536-1.jpg`} alt="" /> </div>
                    
                     </div> :   
              
              
               <section className='container p-4 mt-8  border-4 border-cyan-500 bg-sky-100  mx-auto pt-10'>
           <div className='text-center'>
          <h2 className='text-3xl font-bold text-black       '> 
          My ``volunteer request`` Post: <span className='text-green-500 font-bold   '  > {request.length} </span></h2>
  
        </div>
  
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-8 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Title</span>
                        </div>
                      </th>
  
                      <th
                        scope='col'
                        className=' py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Deadline</span>
                      </th>
  
                      
  
                      <th
                        scope='col'
                        className='py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        Category
                      </th>
  
                        
  
                      <th className=' py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
                        Location
                      </th>
                      <th className=' py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
                        Request Cancel
                      </th>
                      </tr>
                  </thead>
                     
                  <tbody>
                
                 {
                   request?.map(r  => (    
                         <tr   key={r._id} className='font-medium  text-black '  >
                      <td className='p-4   ' > {r.post_title}  </td>  
                   <td   >  {new Date(r.Deadline).toLocaleDateString()}  </td>
                   <td  >  {r.category}  </td>
                
                   <td   >    {r.Location}  </td>
                    <td  >   <button onClick={()=>cancleReq(r._id)} className='btn flex text-xl bg-sky-300  text-black '> Cancel  <FcCancel />  </button>   </td>
                         </tr>
                          
                   ))
                   
                 }
                
           
                        </tbody>
                       
                </table>
              </div>
            </div>
          </div>
        </div>
               </section>}
               
               </div> 
      </div>
    );
};

export default ManagePost;





