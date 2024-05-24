import logo from "./../assets/profilepic.png";


const About = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 border-b border-neutral-800 min-h-[600px]">

      <h2 className="text-center text-5xl lg:text-8xl font-bold  arch">
        Jayadeep{" "}
        <span className="">
          Bellamkonda
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center lg:px-20 md:mx-0  my-10 sm:flex-row lg:mx-32">
        <div className="lg:w-1/2 ">
          <img src={logo} className="w-full lg:w-2/3   border border-transparent  rounded-full" />
        </div>
        <div className=" flex  flex-col gap-10 lg:text-5xl   lg:w-1/2 mt-10  text-center ">
          <p className="arch bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            I'm a Product Designer working remotely from 11°C Dublin, Ireland
          </p>
          <div className="flex flex-col gap-10 text-sm lg:text-xl">
            <p>
          Over the past 12+ years, Ive worked in various areas of digital design, including front-end development, email, marketing, and app UI/UX. Im proud to have worn many hats.>
            </p>
            <p>
              These days, I focus on leading design at GiveDirectly, a nonprofit that lets donors send money directly to the world's poorest households.
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;

