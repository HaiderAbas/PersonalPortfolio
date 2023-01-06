import Image from "next/image";
import React from "react";
import Cards from "../cards/cards";
import SkillsApi from "../fackApi";
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-[70vh]  p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsApi.map((item) => (
            <div key={item.id}>
              <Cards backgroundImage={item.image} heading={item.heading} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
