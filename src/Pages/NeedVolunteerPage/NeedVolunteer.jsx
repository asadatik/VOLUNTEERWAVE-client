import { useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "./NeedVolunteerCard";

const NeedVolunteer = () => {
        const NeedVolunteer = useLoaderData();
        console.log(NeedVolunteer);
    return (
        <div  className="grid   lg:grid-cols-3 container mx-auto gap-10 "         >
              {
                NeedVolunteer.map(need=> <NeedVolunteerCard key={need._id} volunteer={need}   ></NeedVolunteerCard>            )
              }          
        </div>
    );
};

export default NeedVolunteer;