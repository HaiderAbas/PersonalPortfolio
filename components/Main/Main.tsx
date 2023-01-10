import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import AboutImg from "../../public/image.png";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full md:h-[70vh] p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="max-w-[1240px] col-span-2">
          <p className="uppercase text-sm leading-tight text-gray-600">
            LETs BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I am <span className="text-[#5651e5]"> Haider</span>
          </h1>
          <h1 className="py-2 text-gray-700 w-[70%] leading-tight">
            A Front-End Web <span className="mt-14">Developer</span>
          </h1>
          <p className="py-4 text-gray-600  m-auto">
            I am focused on building responsive front-end web applications <br />
            integrating back-end technologies.
          </p>
          <div className="flex justify-start  m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg ml-5 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg ml-5 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg ml-5 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-sm shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-400">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Main;
