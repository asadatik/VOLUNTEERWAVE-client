import{ useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";     
import { Link } from 'react-router-dom';

const ManagePost = () => {
    const{user} = useContext(AuthContext); 
    const [handle,setHandle]= useState(false);                 
        const [item, setItem] = useState([]);
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
    return (
       <div  className=' my-16 '       >
        {/* Table 01 */}
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
                        className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Deadline</span>
                      </th>
  
                      
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        Category
                      </th>
  
                        
  
                      <th className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
                        Update 
                      </th>
                      <th className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
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
                
                   <td > <Link to={`/update/${i._id}`} >   <button  className='btn btn-xs h-10  text-xl bg-indigo-300 text-black ' >Update</button>          </Link>
                   
                     </td>
                    <td>
                    <button  onClick={()=>Delete(i._id)}  className='btn btn-xs h-10 text-xl bg-gradient-to-r from-violet-500 to-fuchsia-300  text-black ' >delete</button>  

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
           </section>

     {/*Table-2  */}
           <section className='container p-4 mt-8  border-4 border-cyan-500 bg-sky-100  mx-auto pt-12'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold        '> 
          My ``volunteer request`` Post: <span className='text-green-500 font-bold   '  > {item.length} </span></h2>
  
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
                        className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Deadline</span>
                      </th>
  
                      
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'
                      >
                        Category
                      </th>
  
                        
  
                      <th className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
                        Update 
                      </th>
                      <th className='px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-gray-500'>
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
                
                   <td > <Link to={`/update/${i._id}`} >   <button  className='btn btn-xs h-10  text-xl bg-indigo-300 text-black ' >Update</button>          </Link>
                   
                     </td>
                    <td>
                    <button  onClick={()=>Delete(i._id)}  className='btn btn-xs h-10 text-xl bg-gradient-to-r from-violet-500 to-fuchsia-300  text-black ' >delete</button>  

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
        </section>
       </div>
    );
};

export default ManagePost;





