import React from "react";
import Button from "./Button";

const Guide2 = () => {
  return (
    <section className="flexCenter flex-col text-center lg:text-left">
      <div className="padding-container max-container w-full my-10 md:my-20">
        <div className="flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-10">
          {/* Title Section */}
          <div className="w-full lg:w-auto">
            <h2 className="text-5xl font-bold xl:max-w-[650px] text-gray-700 mb-5">
              No monthly fees. No clunky integrations. No coding.
            </h2>
          </div>

          {/* Detail Section */}
          <div className="w-full lg:w-auto">
            <h2 className="text-2xl xl:max-w-[350px] text-gray-700 mb-5 mx-auto lg:mx-0">
              Only pay a percentage after you've made a sale.
            </h2>
            <div className="mt-8 flex w-full justify-center lg:justify-start gap-3 sm:w-auto sm:flex-row">
              <Button type="button" title="Start Now For Free" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide2;
