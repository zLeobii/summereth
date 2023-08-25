import Logo1 from "../assets/logo1.png";
import Twitter from "../assets/twitterblack.svg";
import Linkedin from "../assets/linkedinblack.svg";

const Navbar = () => {
    return (
        <div className="bg-white flex sm:flex-row flex-col justify-center items-center w-[100dvw] h-[136px] sm:h-[119px] 2xl:gap-[400px] xl:gap-[350px] lg:gap-[150px] sm:gap-[50px] gap-[15px] pt-[10px] pb-[10px]">
            <div className="flex justify-center items-center gap-[0.6rem] height-[5.1rem] overflow-hidden">
                <img src={Logo1} alt="logo" className="lg:w-[69px] lg:h-[69px] md:w-[55px] md:h-[55px] sm:w-[50px] h-[50px] object-contain"/>
                <h3 className="font-montserrat text-center font-semibold text-black2 text-2xl">summereth</h3>
            </div>
            <div className="flex h-[78px] justify-center items-center gap-[25px]">
                <h5 className="font-montserrat text-center font-semibold text-black1 lg:text-lg md:text-base text-[15px]">Our System</h5>
                <h5 className="font-montserrat text-center font-semibold text-black1 lg:text-lg md:text-base text-[15px]">Case Studies</h5>
                <div className="flex justify-center items-center pt-[15px] pb-[15px] lg:h-[50px] lg:w-[138px] h-[35px] w-[99px]  rounded-xl border-solid border-main1 border-[2px] overflow-hidden">
                    <h5 className="font-montserrat text-center font-semibold text-main1 lg:text-lg text-sm">Book a Call</h5>
                </div>
                <div className="lg:flex hidden justify-center items-center gap-[30px]">
                    <img src={Twitter} alt="twitter" className="w-[45px] h-[45px] object-contain"/>
                    <img src={Linkedin} alt="linkedin" className="w-[45px] h-[45px] object-contain"/>
                </div>
            </div>
        </div>
    );
  };
  
export default Navbar;