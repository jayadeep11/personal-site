import { socials } from "../constants"
import { PiArrowSquareIn } from "react-icons/pi";
import logo from "./../assets/foot.png";


const Footer = () => {
  return (

    <div className=" Contact h-[80vh] flex flex-col justify-between  hello sticky bottom-0  z-0 ">


      <div className="flex lg:flex-row md:flex-row flex-col items-center px-10 lg:px-24 my-5 flex-grow   ">
        <div className="flex-grow text-black flex justify-center items-center">
          <a href="mailto:jayadeep.bellamkonda@gmail.com" className="group lg:text-9xl md:text-8xl text-5xl text-center lg:text-start font-medium">
            <span className="">Let's Work</span> Together<span><PiArrowSquareIn className="group-hover:scale-75 transition-all  inline text-white" /></span>
          </a>
        </div>

        <div className="">
          <ul className="text-black flex items-center flex-col gap-5 flex-grow  ">
            {
              socials.map((item, index) => (
                <li key={index} ><a href={item.href} className="text-4xl trans hover:text-white">{item.label}</a></li>
              ))
            }
          </ul>
        </div>
      </div>


      <p className="hidden">Old Code</p>

      <div className="hidden flex flex-wrap">
        <div className="lg:text-9xl   bg-white  lg:w-2/3 text-3xl pt-10   lg:pt-36  w-full  font-medium text-black tracking-[-0.02em]	">
          <a href="mailto:jayadeep.bellamkonda@gmail.com" className="group">
          </a>
        </div>

        <div className=" pt-36 flex justify-end  w-full lg:w-1/3">
          <ul className="text-black text-4xl flex flex-col gap-5 items-center justify-center">
            {
              socials.map((item, index) => (
                <li key={index} ><a href={item.href} className=" trans hover:text-white">{item.label}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
      <p className=" text-black text-center py-3">2024 © Jaya</p>
    </div >
  );
};

export default Footer

