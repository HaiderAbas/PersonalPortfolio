import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Education from "../components/education/education";

const CardsData = [
  {
    id: 1,
    heading: "Karakurum International University",
    para: "Bachelor of Computer Science and Information Technology",
  },
  {
    id: 2,
    heading: "Degree College Gilgit",
    para: "industrial control system (ICS)",
  },
];

const resume = () => {
  return (
    <>
      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Haider Abbas</h2>
          <div className="flex">
            <a target="_blank" rel="noreferrer">
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a target="_blank" rel="noreferrer">
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 cursor-pointer">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        <div className="py-6">
          <p className="py-1 italic">
            Front End Web Developer & Web Master (2020 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of React js , Tailwind Css , MUI , Next Js,
              TypeScript.
            </li>
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4 ">Contact</h5>
        <div className="grid grid-cols-2">
          <div
            className="flex justify-center shadow-lg hover:scale-105 ease-in duration-300 my-4 py-6
           my"
          >
            <FiPhone size={20} style={{ marginRight: "1rem" }} />
            <p>+923112382229</p>
          </div>
          <div
            className="flex justify-center shadow-lg hover:scale-105 ease-in duration-300 my-4 py-6
           my"
          >
            <AiOutlineMail size={20} style={{ marginRight: "1rem" }} />
            <p>haiderabbs.gb5@gmail.com</p>
          </div>
          <div
            className="flex justify-center shadow-lg hover:scale-105 ease-in duration-300 my-4 py-6
           my"
          >
            <CiLocationOn size={20} style={{ marginRight: "1rem" }} />
            <p>Danyore Gilgit</p>
          </div>
          <div
            className="flex justify-center shadow-lg hover:scale-105 ease-in duration-300 my-4 py-6
           my"
          >
            <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
            <a
              href="https://github.com/HaiderAbas"
              target="_blank"
              rel="noreferrer"
            >
              HaiderAbas
            </a>
          </div>
        </div>
        <h5 className="text-center underline text-[18px] py-4">Education</h5>
        <div className="grid grid-cols-2 text-center">
          {CardsData.map((item) => {
            return (
              <div key={item.id}>
                <Education heading={item.heading} para={item.para} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default resume;
