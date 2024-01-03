import React from "react";
import Typed from 'react-typed'

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative rounded-lg px-4 py-2 mx-auto font-bold bg-[#61e1b9] w-[140px] text-black transition-colors duration-[400ms] hover:text-green-900"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-green-900 transition-all duration-1 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-green-900 duration-1 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-green-900 transition-all delay-200 duration-1 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-green-800 transition-all delay-300 duration-1 group-hover:h-full" />
    </button>
  );
};


const Hero=() => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2" >GROW WITH US</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-300">We're here to help</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl py-4 font-semibold text-green-500 ">The children of</p>
                    <Typed
                    className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                    strings={['Hope','Progress','India']} 
                    typeSpeed={160} 
                    backSpeed={180} 
                    loop/>
                </div>
                <p className="my-4 font-serif text-lg">Elevate your practice: connect with new clients and effortlessly confirm appointments here, maximizing your focus on client care.</p>
                <DrawOutlineButton><a href="/subscriptionplans">Get Started</a></DrawOutlineButton>
                {/* <button className="bg-[#00df9a] w-[140px] rounded-lg text-md font-bold my-6 mx-auto py-3 text-black">Get Started</button> */}
            </div>
            </div>
    )
}
export default Hero