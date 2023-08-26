import Logo1 from "../assets/logo1.png";
import Twitter from "../assets/twitterblack.svg";
import TwitterActive from "../assets/twitter1active.svg";
import Linkedin from "../assets/linkedinblack.svg";
import LinkedinActive from "../assets/linkedin1active.svg";
import { Link } from "react-scroll";
import "../index.css";

const Navbar = () => {
    return (
        <div className="bg-white flex sm:flex-row flex-col justify-center items-center w-[100dvw] h-[136px] sm:h-[119px] 2xl:gap-[400px] xl:gap-[350px] lg:gap-[150px] sm:gap-[50px] gap-[15px] pt-[10px] pb-[10px]">
            <a href="https://summereth.com" rel="noreferrer" className="cursor-pointer overflow-hidden max-sm:h-[5.1rem]">
                <div className="flex justify-center items-center gap-[0.6rem] height-[5.1rem] overflow-hidden">
                    <img src={Logo1} alt="logo" className="lg:w-[69px] lg:h-[69px] md:w-[55px] md:h-[55px] sm:w-[50px] h-[50px] object-contain"/>
                    <h3 className="font-montserrat text-center font-semibold text-black2 text-2xl">summereth</h3>
                </div>
            </a>
            <div className="flex h-[78px] justify-center items-center gap-[25px]">
                <Link to="system" spy={true} offset={0} duration={300}><h5 className="cursor-pointer font-montserrat text-center font-semibold text-black1 sm:hover:text-main1 transition duration-250 ease-out lg:text-lg md:text-base text-[15px]">Our System</h5></Link>
                <Link to="casestudy" spy={true} offset={0} duration={700}><h5 className="cursor-pointer font-montserrat text-center font-semibold text-black1 sm:hover:text-main1 transition duration-250 ease-out lg:text-lg md:text-base text-[15px]">Case Studies</h5></Link>
                <Link to="calendly" spy={true} offset={0} duration={1000} className="group">
                    <div className="cursor-pointer flex justify-center items-center pt-[15px] pb-[15px] lg:h-[50px] lg:w-[138px] h-[35px] w-[99px]  rounded-xl border-solid border-main1 border-[2px] overflow-hidden sm:group-hover:bg-main1 transition duration-150 ease-out">
                        <h5 className="font-montserrat text-center font-semibold text-main1 sm:group-hover:text-white transition duration-250 ease-out lg:text-lg text-sm">Book a Call</h5>
                    </div>
                </Link>
                <div className="lg:flex hidden justify-center items-center gap-[30px]">
                    <a href="https://twitter.com/Summereth_eth" rel="noreferrer" className="cursor-pointer group" target="_blank">
                        <img src={Twitter} alt="twitter" className="w-[45px] h-[45px] object-contain transition duration-250 ease-out sm:group-hover:hidden"/>
                        <img src={TwitterActive} alt="twitter" className="w-[45px] h-[45px] transition duration-250 ease-out object-contain hidden sm:group-hover:flex"/>
                    </a>
                    <a href="https://www.linkedin.com/in/summereth/" rel="noreferrer" className="cursor-pointer group" target="_blank">
                        <img src={Linkedin} alt="linkedin" className="w-[45px] h-[45px] transition duration-250 ease-out object-contain sm:group-hover:hidden"/>
                        <img src={LinkedinActive} alt="twitter" className="w-[45px] h-[45px] transition duration-250 ease-out object-contain hidden sm:group-hover:flex"/>
                    </a>
                </div>
            </div>
        </div>
    );
  };
  
export default Navbar;