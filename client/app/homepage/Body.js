"use client";
export default function Body() {
  return (
    <div className="flex flex-row">
      <div className="">
        <div className="w-[600px] h-[300px] m-2 py-4 flex flex-col justify-center items-center">
          <div className="transform scale-75 rotate-6 -translate-x-40 translate-y-15 ">
            <h2 className="pb-2 text-3xl font-semibold tracking-wider">MARK</h2>
          </div>
          <div className="">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl italic">
              RUZELL
            </h1>
          </div>
          <div className="">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              MARAY
            </h3>
          </div>
        </div>
      </div>
      <div>other side</div>
    </div>
  );
}
