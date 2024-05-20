import { socials } from "../constants";


const Footer = () => {
  return (
    <div className=" Contact h-[80vh] flex flex-col justify-between  hello px-24 mx-auto sticky bottom-0  z-0 ">
      <div className="flex justify-between  pt-10 ">
        <div className="bg-white flex  bg-transparent">
          <label className="inline-block font-normal text-black text-2xl" >Name</label>
        </div>
        <div className="flex flex-row gap-20">
          <ul className="flex text-2xl flex-col gap-3 text-black font-medium">
            {socials.map((item, index) => (
              <li key={index}>
                <a className="hover:text-white transition-all duration-300" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-left " >
        <h1 className="text-[13rem]  text-black">Contact Me</h1>
      </div>
    </div>
  );
};

export default Footer;
