import React from "react";
interface cardProps {
  heading: string;
  id?: number;
  para: string;
}
function Education({ heading, id, para }: cardProps) {
  return (
    <div key={id} className="p-6 ">
      <div>
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Education;
