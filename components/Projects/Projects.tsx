import React from "react";
import propertyImg from "./../../public/projects/social.png";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={propertyImg}
            projectUrl="/"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={propertyImg}
            projectUrl="/"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={propertyImg}
            projectUrl="/"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
