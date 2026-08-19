import React from "react";

const Cta = () => {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                .cta h1, .cta p, .cta button {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <section className="flex  cta flex-col items-center justify-center mx-auto  max-md:px-2 max-w-7xl my-10 w-full text-center rounded-2xl py-16 bg-[#071A3D]">
        <img src="/logo/ogcrystalwhite.png" className="w-15"/>
        <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl mt-5">
          Your next step starts with a conversation.
        </h1>
        <p className="text-sm text-gray-400 max-w-xl mt-2">
          Whether you are building a business, strengthening your team,
          developing your people or navigating your own growth journey, we would
          love to understand where you are and explore how we can support you.
        </p>
        <div className="flex gap-5">
          <button className="px-5  max-sm:px-3 cursor-pointer py-2.5 mt-4 text-sm bg-[#b8944d] hover:scale-105 transition duration-300 text-white">
           Book a Consultation
          </button>
          <button className="px-5  max-sm:px-3 cursor-pointer py-2.5 mt-4 text-sm max-sm:text-xs border text-white border-white hover:scale-105 transition duration-300 ">
           Start a Conversation
          </button>
          
        </div>
      </section>
    </>
  );
};

export default Cta;
