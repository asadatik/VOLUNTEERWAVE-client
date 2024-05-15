

const NeedVolunteerTable = ({need}) => {

    console.log(need.length)

    return (
       <div>
        <section className="container px-4 mx-auto">
   

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div className="flex text-xl  items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
                                        <span>Volunteer   Title</span>
                                    </div>
                                </th>

                              

                                <th scope="col" className="px-4 py-3.5 text-sm  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center text-xl gap-x-2">
                                        <span>Deadline</span>

                                       
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex text-xl items-center gap-x-2">
                                        <span>Location</span>

                                       
                                    </button>
                                </th>



                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center text-xl ">
                                        <span>Number Of Volunteer Needed</span>
                                    </button>
                                </th>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center text-xl ">
                              
                                        <span>Details</span>
                                    </div>
                                </th>   
                                

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                           
                           {
                            need.map( n => (
                    <tr key={n._id}  >
                                <td className="px-4 py-4 flex items-center gap-x-3 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
                                   {n.post_title} 
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    
                                     {new Date(n.deadline).toLocaleDateString()}
                                    
                                    </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700  dark:text-gray-300 whitespace-nowrap">
                                   {n.Location}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                   {n.volunteers}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <button className=" px-1 bg-gradient-to-r rounded-xl from-violet-500 to-fuchsia-500 text-white text-lg   "  > Details        </button>
                                    
                                    </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    
                                </td>
                                 </tr> )  )
                            
                                
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

export default NeedVolunteerTable;