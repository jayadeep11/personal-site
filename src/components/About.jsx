import logo from "./../assets/prop.jpg";


const About = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 border-b border-neutral-800 min-h-[600px]">

      <h1 className="sii font-bold text-5xl lg:text-6xl text-center block mb-32">About Me</h1>
      <h2 className="text-center text-5xl lg:text-9xl font-bold mb-16  Acorn">
        Jayadeep{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Bellamkonda
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-around   md:mx-0  mb-10 sm:flex-row ">
        <div className=" lg:basis-[26rem] p-2 max-[600px]:p-6 max-[600px]:mb-5">
          <img src={logo} className="w-full " style={{ clipPath: "circle(50%)" }} />
        </div>
        <div className=" flex lg:basis-[40rem]  flex-col gap-10 text-3xl sm:text-xl md:px-10  lg:text-5xl text-center  lg:text-start   lg:w-1/2">
          <p className="Acorn text-neutral-500">
            I'm an IT student at Gayatri Vidya Parishad College of Engineering.</p>
          <div className="flex flex-col gap-10 text-sm lg:text-xl text-gray-500">
            <p>
              My skills include proficiency in React.js and Tailwind CSS, enabling me to create modern, responsive web applications with ease.            </p>
            <p>
              I use Arch Linux as my primary operating system, which allows me to customize my development environment to my exact needs.            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;

