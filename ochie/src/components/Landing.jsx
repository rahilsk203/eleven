import { useState } from 'react';

function Landing() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-40vh bg-zinc-900 pt-1">
      {/* Main Text Section */}     
      <div className='textstructure mt-20  px-4 '>
        {["Eleven","Interior"].map((item,index) =>{
          return(
          <div className="masker">
            <div className="w-fit item-end overflow-hidden">
              <h1
  className="pt-[2vw]  uppercase text-[12vw] leading-[.75] font-semibold"
>
  {item}
</h1>
            </div>
          </div>
          )
        })}
      </div>


      {/* Footer Section */}
      <div className="border-t-[1px] border-zinc-800 mt-[220Px] sm:mt-42 sm:justify-between sm:flex flex-col sm:flex-row items-center py-5 px-7 sm:px-18 ">
        {/* Text Items */}
        {["For public and private companies", "From the first pitch to IPO"].map((item, idx) => (
          <p
            key={idx}
            className="text-md font-light tracking-tight sm:leading-none leading-[4] text-white"
          >
            {item}
          </p>
        ))}
        {/* Start Project Button */}
        <div className="start flex items-center mt-4 sm:mt-0">
          <button className="px-4 py-2 border-[2px] border-zinc-600 rounded-full text-white w-40 font-light text-center capitalize hover:bg-zinc-700 hover:text-black transition duration-300">
            Start the project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;