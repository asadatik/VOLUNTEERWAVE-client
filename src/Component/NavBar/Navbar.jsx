import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip'; 
import { FaUserLarge } from "react-icons/fa6";
const Navbar = () => {
    const { user,LogOut } = useContext(AuthContext)
    const[theme,setTheme] = useState('light')  
     
    useEffect(()=>{
     localStorage.setItem('theme',theme)
     const localTheme = localStorage.getItem('theme')
     document.querySelector('html').setAttribute('data-theme' , localTheme)
    },[theme]       )  

       const handleToggole =(e)=> {
         if(e.target.checked){
           setTheme('dark')
         }
          else
          {setTheme('light') }
       }
    return (
        <div   className=" "style={{backgroundImage: 'url(https://i.ibb.co/kS3PMFx/pexels-pixabay-355288.jpg)'}}   >
              <div className="navbar  bg-opacity-5 bg-gradient-to-t  from-neutral-950 ...  ]  mb-4 lg:px-20">
        <div className="navbar-start   ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5  text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
            <a className="text-xl  text-white " >  <NavLink   to="/">  Home </NavLink></a>
             
                      
            </ul>
          </div>
             <a className="  lg:text-3xl font-extrabold  uppercase text-indigo-300  "> Volunteer<span className="text-pink-400" >Wave</span> </a>
             
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <a className="text-2xl text-white font-semibold " >  <NavLink   to="/">  Home </NavLink></a>
           
          </ul>
        </div>
        <div className="navbar-end lg:space-x-2 "> 
        <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggole}  className="theme-controller"  />
  
  {/* sun icon */}
  <svg className="swap-off text-white  fill-current w-4 h-4 lg:w-10 lg:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on text-white fill-current w-4 h-4 lg:w-10 lg:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
                 {
                    user? 
                    <div> <a data-tooltip-id="my-tooltip">
                      { user.photoURL?<img className="w-12  rounded-full" src={user.photoURL} 
                             alt="" />
                          :<img className="w-12 rounded-full "  src={<FaUserLarge />}  />  }
                    </a>
                    <Tooltip id="my-tooltip">
                    <div>
                         <h1>{user.displayName?user.displayName:'user name not found'}</h1>
                    </div>
                  </Tooltip>  </div> 
                     :
                   <label  tabIndex={0} className="btn tooltip  btn-ghost btn-circle avatar">           
                  </label>
                }
                 
                    
                     {user ? <Link onClick={LogOut} className="  p-1  rounded-xl bg-sky-950 text-white  text-xl   "  >Log Out</Link> 
                        :  <div >
                      <a className="text-2xl text-white lg:mx-3  " >    <NavLink  to="/login"> Login    </NavLink></a>   
                      <a className="text-2xl text-white   " >    <NavLink  to="/signup"> Register   </NavLink></a>
                      </div> }
                       </div>
                      </div>

        </div>
    );
};

export default Navbar;