import React,{useState,useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import NeumorphismButton from './NeumorphismButton'
import { useAuth0} from '@auth0/auth0-react' 
import axios from "axios";

const Navbar = ()=> {
    const {loginWithRedirect,logout,user,isAuthenticated}=useAuth0();
        const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    };
    const sendUserToServer = () => {
        // Extract relevant user data
        const userData = {
          nickname: user.nickname,
          name: user.name,
          email: user.email,
        };
    
        // Send user data to the server using Axios
        axios
          .post("http://localhost:5000/users", userData)
          .then((response) => {
            console.log("User data sent successfully:", response.data);
            // You can update user.sentToServer or take other actions if needed
          })
          .catch((error) => {
            console.error("Error sending user data:", error);
          });
      };
      useEffect(() => {
        if (isAuthenticated) {
          sendUserToServer();
        }
      }, [isAuthenticated]);
    return (
    <div className="
    flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SAMS</h1>
        <ul className="hidden md:flex ">
            <li className="mt-6 px-4">
                <a href="/">Home</a></li>
            <li className="mt-6 px-4">About</li>
            <li className="mt-6 px-4">
                <a href="/contactform">Contact</a></li>
            <li className="mt-6 px-4">References</li>
            <li className="mt-6 px-4 ">{isAuthenticated && <p>{user.nickname}</p>}</li>
            {/* {isAuthenticated ? (
                <li className='mt-0 px-0'>
                    <NeumorphismButton buttonText="LogOut" onClick={() => logout({ returnTo: window.location.origin})} />
                        
                    
                </li>
            ):(
                <li className=''>
                    <NeumorphismButton buttonText="LogIn" onClick={() => loginWithRedirect()} />
                </li>
            )} */}

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20} />}
            
        </div>
        <div  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>

        <ul className=' uppercase p-4 space-y-4'>
            <li className="p-4 border-b border-gray-300">Home</li>
            <li className="p-4 border-b border-gray-300">About</li>
            <li className="p-4 border-b border-gray-300"><a href="/contactform">Contact</a></li>
            <li className="p-4 border-b border-gray-300">References</li>
            <li className="p-4 border-b border-gray-300">{isAuthenticated && <p>{user.name}</p>}</li>
            {isAuthenticated ? (
                <li>
                    <NeumorphismButton buttonText="LogOut" onClick={() => logout({ returnTo: window.location.origin})} />

                </li>
            ):(
                <li>
                    <NeumorphismButton buttonText="LogIn" onClick={() => loginWithRedirect()} />
                </li>
            )}
            

        </ul>
        </div>
    </div>
    )
}
export default Navbar