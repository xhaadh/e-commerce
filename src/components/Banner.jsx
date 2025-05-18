import React from "react";
import Person2 from "../assets/person2.webp";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden max-container padding-container pb-10 pt-10 md:pb-20 md:pt-20">
      <div className="flex flex-col md:flex-row">

        {/* Image Panel */}
        <div className="w-full md:w-1/2">
          <img
            src={Person2}
            alt="Person using tablet at café"
            className="object-cover w-full h-64 md:h-auto"
          />
        </div>
        {/* Text Panel */}
        <div className="w-full md:w-1/2 bg-[#fd734f] flex items-center justify-center p-8 md:p-16">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Do it all with Hotmart
            </h2>
            <p className="text-lg md:text-xl text-white leading-snug">
              The complete toolkit. From product building to selling around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
