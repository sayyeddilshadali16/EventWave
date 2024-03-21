import React from "react";

const Events = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className=" w-full h-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
      >
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight">
          Trusted by hundreds of events.
        </h1>
        <div className="flex gap-10 w-full border-t-[1px] pt-10 mt-20 border-[#93ba58]">
          <div className="w-1/2 ">
            <h1 className="text-5xl">Event experiences:</h1>
            <p className="text-xl mt-20">
              "Step into the pulsating heart of music's embrace at our
              electrifying concert. Feel the adrenaline surge as vibrant
              melodies intertwine with the energy of the crowd, creating an
              atmosphere charged with excitement. Lose yourself in the rhythm,
              as the stage becomes a portal to another world, where time slows
              and euphoria reigns supreme. Join us for a night of unforgettable
              experiences, where every beat is a heartbeat, and every note a
              symphony of emotion."
            </p>
          </div>
          <div className="w-1/2 h-[55vh] bg-[url('https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
