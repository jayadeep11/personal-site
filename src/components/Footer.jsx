import { socials } from "../constants"
import { PiArrowSquareIn } from "react-icons/pi";


const Footer = () => {
  return (
    <div className=" Contact h-[80vh] flex flex-col justify-between  hello px-24 mx-auto sticky bottom-0  z-0 ">
      <div className="flex flex-wrap mt-9">
        <div className="lg:text-[10rem] lg:w-2/3 text-[30px]   w-full  font-medium text-black tracking-[-0.02em]	"><span className="">Let's Work</span> Together<PiArrowSquareIn className="inline text-white" /></div>
        <div className=" flex flex-col  gap-32 lg:w-1/3  w-full lg:pl-96 mt-14  lg:justify-between">
          <ul className="flex lg:text-3xl  text-xl  justify-center items-end flex-col gap-3 text-black font-medium">
            {socials.map((item, index) => (
              <li key={index}>
                <a className="hover:text-white transition-all duration-300" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-black text-center pb-3">2024 © Jaya</p>
    </div>
  );
};

export default Footer
