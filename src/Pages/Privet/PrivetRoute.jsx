import { useContext } from 'react';
import {Navigate,useLocation} from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';


const PrivetRoute = ({children}) => {
    const location =  useLocation();
    
    const {user,loading} = useContext(AuthContext);
    console.log(user)
     if(  loading ) {
        return <dir><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></dir> 
     
     } 
                   
       if(user)   {    
          return children 
       }
    
      return <Navigate state={location.pathname}  to='/login' >    </Navigate> 
  
};

export default PrivetRoute;



          
  