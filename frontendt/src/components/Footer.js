import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SAMS</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Organizers</h6>
        <ul>
            <li className='py-2 text-sm'>Sayandeepa</li>
            <li className='py-2 text-sm'>Monalisa</li>
            <li className='py-2 text-sm'>Ankith</li>
            <li className='py-2 text-sm'>Subhajyoti</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Email</h6>
        <ul>
            <li className='py-2 text-sm'>abc@123</li>
            <li className='py-2 text-sm'>abc@1234</li>
            <li className='py-2 text-sm'>abc@12345</li>
            <li className='py-2 text-sm'>abc@12356</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Media</li>
            <li className='py-2 text-sm'>References</li>
            <li className='py-2 text-sm'>Future works</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;