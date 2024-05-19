
const About = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-[80px] mt-10 lg:mt-20 tracking-wide">
          Jayadeep{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Bellamkonda
          </span>
        </h2>
      </div>
      <div className="flex justify-center  flex-wrap mt-10 lg:mt-20">
        <p className="text-center">Work in progress</p>
      </div>
    </div>
  );
};

export default About;
