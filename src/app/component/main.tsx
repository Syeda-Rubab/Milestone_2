"use client";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineFacebook} from 'react-icons/ai'; // Placeholder icon
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Main() {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
    const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedinHovered,setIsLinkedinHovered] = useState(false);
  
    return (

        <div className="w-full md:w-2/3 mx-20">
        <div className="h-screen">
        {isClient && (
          <Image src="/soap.png" alt="image" width={1100} height={900} className="relative flex pt-20 pl-96 mx-96 fixed left-20 "/>
        )}
        <div className="font-serif">
            <p className="relative text-5xl font-semibold fixed left-40 fixed bottom-60">
            All Natural Soaps,<br/>
            Salts & Oils
            </p>
            <div className="relative text-center flex pt-4 fixed left-40 bottom-60">
                <p className="text-gray-500 text-base font-style: italic">
                    Turn every bath into a unique experience
                </p>
            </div>

        </div>
        <div className="relative flex items-center justify-center h-screen mb-10 flex pb-80 fixed bottom-96">
        <button className="absolute left-28 transform translate-x-1/2 px-12 py-4 border-2 border-gray-400  bg-white text-gray-400 px-4 py-3 rounded-sm text-sm font-semibold hover:bg-pink-200 transition duration-600 ">
          Shop Now
        </button>
        </div >
        <div className="h- screen sm:block">
<div className="flex space-x-8">
    <div className="relative flex justify-between items-center mx-8 my-0 space-x-4 flex pb-96 fixed bottom-96 mb-96">
        
    <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsFacebookHovered(true)}
          onMouseLeave={() => setIsFacebookHovered(false)}
          className="text-3xl transition-transform transform hover:scale-125 duration-300"
        >
          {isFacebookHovered ? <FaFacebook className="text-blue-600" /> : <AiOutlineFacebook className="text-gray-400" />}
        </a>
        
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsTwitterHovered(true)}
          onMouseLeave={() => setIsTwitterHovered(false)}
          className="transition-transform transform duration-300"
        >
          {isTwitterHovered ? (
            <FaTwitter className="text-blue-400 text-4xl hover:scale-125" />
          ) : (
            <AiOutlineTwitter className="text-gray-400 text-4xl hover:scale-125" />
          )}
        </a>   
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsInstagramHovered(true)}
          onMouseLeave={() => setIsInstagramHovered(false)}
          className="transition-transform transform duration-300"
        >
          {isInstagramHovered ? (
            <FaInstagram className="text-pink-600 text-4xl hover:scale-125" />
          ) : (
            <AiOutlineInstagram className="text-gray-400 text-4xl hover:scale-125" />
          )}
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsLinkedinHovered(true)}
          onMouseLeave={() => setIsLinkedinHovered(false)}
          className="text-3xl transition-transform transform duration-300"
        >
          {isLinkedinHovered ? (
            <FaLinkedin className="text-blue-600 scale-125" />
          ) : (
            <AiOutlineLinkedin className="text-gray-400" />
          )}
        </a>
                    
                    
        </div>

      <div className="relative text-gray-500 text-center flex pl-96 mx-40 flex pb-96 fixed bottom-96 mb-64 text-base">
        Copyright @ La Lavendar <br /> All Rights Reserved 2024.
      
      </div>
      </div>
      </div>
      </div>
      </div>
    
      
    );
  }
  
  export default Main;
