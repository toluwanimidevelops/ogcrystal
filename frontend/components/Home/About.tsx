import React from "react";
import Title from "../Global/Title";
import Image from "next/image";

const About = ({ titleNotNeeded, exemptButton }: { titleNotNeeded?: boolean, exemptButton?: boolean  }) => {
  return (
    <div className="max-w-full w-7xl px-6 md:px-12 mx-auto ">
      {titleNotNeeded ? (
        ""
      ) : (
        <Title small="who we are" title="Og Crystal Services" />
      )}
      <div className="flex gap-5 font-mulish text-[17px] text-[#7a7a7a] font-normal max-md:flex-col">
        <div className="flex-1">
          <p>OG Crystal Services: People. Performance. Purpose.</p>
          <p className="mt-2">
            Growth is built by people. Every business begins with people. Every
            career is shaped by decisions. Every season of growth comes with
            questions. At OG Crystal, we help people and growing businesses
            navigate those questions with practical guidance, professional
            expertise and people-focused solutions. way forward.
          </p>
          <p className="mt-2">
            A business may be growing but struggling with its people. A founder
            may know the business needs structure but not know where to start. A
            professional may be capable but unsure about the next move. A
            graduate may simply need someone to help them see possibilities they
            have not considered. That is where OG Crystal comes in. We listen,
            understand the real issue, bring perspective and help turn
            uncertainty into a practical.
          </p>
          {exemptButton?"": <button  className="bg-[#B8944D] mt-4 text-white py-2 px-6 cursor-pointer text-md  hover:bg-[#a89268] transition-colors">
            Learn More
          </button>}
          
        </div>
        <div className="flex-1">
          <p>More than advice. A trusted partner in growth.</p>
          <p className="mt-2">
            OG Crystal Services Limited is an advisory business built around a
            simple belief: when people grow, businesses grow.
          </p>
          <p className="mt-2">
            We partner with organizations and individuals to solve
            people-related challenges, strengthen performance and create
            pathways for meaningful growth.
          </p>
          <p className="mt-2">
            Our approach combines professional expertise with a human
            understanding of people, because behind every business challenge is
            a people story.
          </p>
          <p className="mt-2">
            We do not believe in cookie-cutter solutions. Every business, team
            and individual has a unique context. Our role is to listen,
            understand, advise and help create a practical path forward.
          </p>
        </div>
      </div>
      <div className="w-full p-2 my-15">
        <div className="w-full max-h-170 bg-gray-200 rounded-tl-[170px] overflow-hidden rounded-br-[170px] max-md:rounded-br-[100px] max-md:rounded-tl-[100px] max-sm:rounded-tl-[70px] max-sm:rounded-br-[70px]">
          <img src={"/002.jpg"} alt={"About"} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
