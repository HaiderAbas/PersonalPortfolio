import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/front-end-developer-skills.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-[70vh] p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I am Haider, a professional React js Developer having more than
            2 years of experience in web development using HTML 5, CSS,
            Bootstrap, Tailwind CSS, material UI, Styled components, React js,
            Next js, Typescript. During this time I have worked on many
            different small, and large scale projects using these technologies.
            if interested. please send me message first and submit your project
            requirement.I shall create a draft first then you can order my GIG.
          </p>
          <p className="py-2 text-gray-600">
            I am expert in Information Technology I am doing my BS in Computer
            Science. I have working experience of last 1 Year in the Computer
            Software industry and Web Front End Development. I am working as a
            front-end developer for the last 1 year. I am extremely passionate
            about my work. I have a strong grip in the latest front end
            development technologies Html5, Css3, Bootstrap4,Media Queries and
            JavaScript.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl h-[50vh] w-[100vw]"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
