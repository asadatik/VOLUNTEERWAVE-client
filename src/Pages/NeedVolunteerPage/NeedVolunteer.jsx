import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "./NeedVolunteerCard";
import { FiAlignJustify } from "react-icons/fi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Helmet } from "react-helmet-async";
import NeedVolunteerTable from "./NeedVolunteerTable";
const NeedVolunteer = () => {
        const NeedVolunteer = useLoaderData();
        console.log(NeedVolunteer);

        AOS.init();     
       
    return (
          

       <div>
           <Helmet>    <title>Need Volunteer Page</title>    </Helmet>
<Tabs>
      <div className=' container px-6  mx-auto'>
        <h1 className='text-2xl font-bold text-center  text-amber-700 border-b-4 border-cyan-500 w-1/2 mx-auto py-4  capitalize lg:text-4xl '>
        Volunteer Opportunities
        </h1>

      
        <div    className='flex  mt-4   items-center justify-end'>
          <TabList className='' >
            <Tab  > <TfiLayoutGrid3Alt  className="text-2xl text-sky-400 " /> </Tab>
            <Tab  ><FiAlignJustify   className="text-2xl"  /></Tab>
       
          </TabList>
        </div>
        <TabPanel>
        <div  className="grid mt-10  lg:grid-cols-3 container mx-auto gap-10 "         >
              {
                NeedVolunteer.map(need=> <NeedVolunteerCard key={need._id} volunteer={need}   ></NeedVolunteerCard>            )
              }          
                </div>
        </TabPanel>

        <TabPanel>
                   <div> <NeedVolunteerTable need={NeedVolunteer}  ></NeedVolunteerTable>   </div>
        </TabPanel>

        
      </div>
    </Tabs>    


              
       </div>
    );
};

export default NeedVolunteer;