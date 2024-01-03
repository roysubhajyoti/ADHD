// import emailjs from "emailjs-com";
// import React from 'react';
// import { FiSend } from "react-icons/fi";
// import DotGrid from "./WaterDropGrid";
// //bg
// import ParticlesBackground from "./ParticlesBackground";
// //new buuton
// const NeumorphismButton = () => {
//   return (
//     <button className="px-4 py-2 rounded-full
//         flex items-center gap-2
//         text-slate-500 mt-8
//         shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

//         transition-all

//         hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
//         hover:text-violet-500">
//       <FiSend />
//       <span>Send Message</span></button>
//   );
// }
// const Contactform =()=> {

//     const sendEmail=(e)=> {
//         e.preventDefault();
//     emailjs.sendForm('service_0zsv6kx', 'template_6ek7swp', e.target, 'kUKBrmpqp-yv3GAJK')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }
//         return(
//         <div>
//             <ParticlesBackground />
//             <div className="container relative flex justify-center ">

//             <form onSubmit={sendEmail}>
//                     <div className="row pt-12 mt-8 text-center mx-12 flex-col items-center justify-center  ">

//                         <div className="col-8  form-group pt-6 mx-auto ">

//                             <input type="text" className="h-8   w-[300px] bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
//         transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
//         hover:text-violet-500" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-8 form-group pt-6 mx-auto ">
//                             <input type="email" className="h-10 w-[350px] bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

//         transition-all

//         hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
//         hover:text-violet-500" placeholder="Email Address" name="email"/>
//                         </div>
//                         <div className="col-8 form-group pt-6 mx-auto">
//                             <input type="text" className="h-12 w-[400px] bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

//         transition-all

//         hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
//         hover:text-violet-500" placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="col-8 form-group pt-6 mx-auto">
//                             <textarea className=" bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

//         transition-all

//         hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
//         hover:text-violet-500" id="" cols="60" rows="4" placeholder="Your message" name="message"></textarea>
//                         </div>
//                     <div className="col-8 pt-6 mx-auto justify-center flex text-white">
//                             <NeumorphismButton />

//                     </div>
//                 </div>
//                 </form>
//             </div>

//         </div>
//     );
// }
// export default Contactform;
//with animation->
import NeumorphismButton from "./NeumorphismButton";
import emailjs from "emailjs-com";
import React, { useEffect } from "react";
// import DotGrid from "./WaterDropGrid";
import ParticlesBackground from "./ParticlesBackground";
import anime from "animejs";

const ContactForm = () => {
  useEffect(() => {
    // Staggered animation for form elements
    anime({
      targets: ".form-group",
      translateY: [20, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 800,
      delay: anime.stagger(150, { start: 300 }),
    });

    // Animation for NeumorphismButton
    anime({
      targets: ".neumorphism-button",
      translateY: [20, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 800,
      delay: 600,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0zsv6kx",
        "template_6ek7swp",
        e.target,
        "kUKBrmpqp-yv3GAJK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <ParticlesBackground />
      <div className="container relative flex justify-center">
        <form onSubmit={sendEmail}>
          <div className="row pt-12 mt-8 text-center mx-12 flex-col items-center justify-center">
            <div className="col-8 form-group pt-6 mx-auto">
              <input
                type="text"
                className="h-8 w-[300px] bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]      
                transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                hover:text-violet-500"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-6 mx-auto">
              <input
                type="email"
                className="h-10 w-[350px] bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                transition-all
                hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                hover:text-violet-500"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-6 mx-auto">
              <input
                type="text"
                className="h-12 w-[400px] bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                transition-all
                hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                hover:text-violet-500"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-6 mx-auto">
              <textarea
                className="bg-slate-100 form-control rounded-sm shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                transition-all
                hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                hover:text-violet-500"
                id=""
                cols="60"
                rows="4"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-6 mx-auto justify-center flex text-white neumorphism-button">
              <NeumorphismButton
                buttonText="Send Message"
                onClick={sendEmail}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
