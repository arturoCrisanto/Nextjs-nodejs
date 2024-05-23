"use client";
export default function Body() {
  return (
    <div className="flex flex-row">
      <div className="">
        <div className="bg-gray-100 w-[600px] h-[300px] m-2 py-4 flex flex-col">
          <section className=" bg-slate-500">
            <h2 className="border-b pb-2 text-3xl font-semibold tracking-wider">
              MARK
            </h2>
          </section>
          <section className=" bg-slate-600">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl italic">
              RUZELL
            </h1>
          </section>
          <section className=" bg-slate-700">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              MARAY
            </h3>
          </section>
        </div>
      </div>
      <div>other side</div>
    </div>
  );
}
