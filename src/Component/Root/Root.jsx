import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
             <Navbar></Navbar>

            <div className="  my-10  " >

            <Outlet></Outlet> 
            </div>
               
          

             <Footer></Footer>

        </div>
    );
};

export default Root;