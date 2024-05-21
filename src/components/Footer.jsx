import { socials } from "../constants"
import { PiArrowSquareIn } from "react-icons/pi";


const Footer = () => {
  return (
    <div className=" Contact h-[80vh] flex flex-col justify-between  hello lg:px-24 px-16  mx-auto sticky bottom-0  z-0 ">
      <div className="flex flex-wrap">
        <div className="lg:text-9xl  lg:w-2/3 text-3xl pt-10   lg:pt-36  w-full  font-medium text-black tracking-[-0.02em]	">
          <span className="">Let's Work</span> Together<PiArrowSquareIn className="opacity-0 lg:opacity-100  inline text-white" /></div>

        <div className=" pt-36 flex justify-end  w-full lg:w-1/3">
          <ul className="text-black text-4xl flex flex-col gap-5 items-center justify-center">
            {
              socials.map((item, index) => (
                <li key={index} ><a href={item.href} className="hover:text-white">{item.label}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
      <p className="text-black text-center pb-3">2024 © Jaya</p>
    </div >
  );
};

export default Footer
