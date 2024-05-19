import { Projects } from "../constants";


const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="pro text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Projects
      </h2>
      <div className="flex flex-wrap">
        {Projects.map((Project, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="font-semibold">{Project.name}</p>
              <p className="font-semibold mt-16">{Project.content}</p>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Source
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Preview
              </a>
            </div>
          </div>
        ))}About
      </div>
    </div>
  );
};

export default Pricing;
