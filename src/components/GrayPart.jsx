import React from 'react';
import Button from './Button';

const GrayPart = () => {
  return (
    <section className="bg-gray-800 text-white py-28 md:mb-20 mb-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Transform your knowledge into a business.<br />
          Get started today for free.
        </h2>
        <div className="mt-8 justify-center items-center flex">
          <Button title="Start Now for Free"/>
        </div>
      </div>
    </section>
  );
}

export default GrayPart;
