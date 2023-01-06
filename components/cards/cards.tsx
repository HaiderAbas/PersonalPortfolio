import React from "react";
import Image from "next/image";
interface cardDataProps {
  backgroundImage: any;
  heading: string;
}
function Cards(props: cardDataProps) {
  const { backgroundImage, heading } = props;
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto w-[64px] h-[64px]">
          <Image src={backgroundImage} alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{heading}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
