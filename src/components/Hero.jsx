import React from "react"
import PersonImage from "../assets/busyperson.webp"
import Button from "./Button"

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 flex flex-col-reverse gap-10 py-10 pb-20 lg:flex-row lg:gap-28 lg:py-20">
    {/* Text Content */}
    <div className="flex flex-1 flex-col justify-center space-y-6 xl:w-1/2 z-20
                    text-center lg:text-left">
      <h1 className="text-gray-700 text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold">
        All the Tools for your Creator Business to Thrive
      </h1>

      <p className="regular-16 text-gray-30 xl:max-w-[520px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        nisi debitis. Nam quaerat provident corrupti animi nostrum hic assumenda
        cum magnam, quibusdam quis atque, in, aperiam officiis excepturi.
        Quidem, accusantium.
      </p>

      <div className="mt-8 flex w-full justify-center lg:justify-start gap-3 sm:w-auto sm:flex-row">
        <Button type="button" title="Start Now For Free" />
      </div>
    </div>

    {/* Image */}
    <div className="flex flex-1 justify-center items-start">
      <img
        src={PersonImage}
        alt="Person working"
        className="w-full max-w-lg rounded"
      />
    </div>
  </section>
)

export default Hero
