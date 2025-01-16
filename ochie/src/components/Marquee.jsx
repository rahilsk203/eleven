import React from 'react';
import Marquee from 'react-fast-marquee';

function CustomMarquee({ withBorder = true }) {
  return (
    <div className="w-full  py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl content-center mt-20">
      <div
        className={`${
          withBorder ? 'border-t-2 border-b-2 border-zinc-400' : ''
        } flex`}
      >
        <Marquee gradient={false} speed={50} className="flex gap-10">
          <h1 className="text-[22vw] leading-none text-white font-bold px-4 uppercase">
            Elevate Your Space with Eleven Interiors!
          </h1>
          <h1 className="text-[22vw] leading-none text-white font-bold px-4 uppercase">
            Modern Designs. Tailored to You.
          </h1>
          <h1 className="text-[22vw] leading-none text-white font-bold px-4 uppercase">
            Transforming Dreams into Reality.
          </h1>
        </Marquee>
      </div>
    </div>
  );
}

export default CustomMarquee;