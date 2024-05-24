"use client";

import BlobBodyicon from "../../public/blob.svg";

export default function Body() {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="w-[600px] h-[400px]">
        <div className="w-[600px] h-[300px] m-2 py-4 flex flex-col justify-center items-center ">
          <div className="transform scale-75 -rotate-[20deg] -translate-x-20 translate-y-[1rem]">
            <h2 className="pb-2 text-3xl font-semibold tracking-wider">MARK</h2>
          </div>
          <div className="transform scale-40 rotate-5 -translate-x-30 translate-y-30 p-2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              RUZELL
            </h1>
          </div>
          <div className="transform scale-45 translate-x-[5rem] -translate-y-[1rem]">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              MARAY
            </h3>
          </div>
          <div className="">
            <p className="text-xl text-muted-foreground">
              I craft beautiful websites by day, fueled by delicious coffee (and
              a sprinkle of test automation knowledge). Let's build something
              together!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <BlobBodyicon className="w-[800px] h-[400px]" />
      </div>
    </div>
  );
}
