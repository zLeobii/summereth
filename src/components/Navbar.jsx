import Logo1 from "../assets/logo1.png";
import Twitter from "../assets/twitterblack.svg";
import Linkedin from "../assets/linkedinblack.svg";

const Navbar = () => {
    return (
        <div className="bg-main3 flex justify-center items-center w-[100dvw] gap-[400px] h-[119px] pt-[10px] pb-[10px]">
            <div className="flex justify-center items-center gap-[0.6rem] height-[5.1rem]">
                <img src={Logo1} alt="logo" className="w-[69px] h-[69px] object-contain"/>
                <h3 className="font-montserrat text-center font-semibold text-black2 text-2xl">summereth</h3>
            </div>
            <div className="flex h-[78px] justify-center items-center gap-[25px]">
                <h5 className="font-montserrat text-center font-semibold text-black1 text-lg">Our System</h5>
                <h5 className="font-montserrat text-center font-semibold text-black1 text-lg">Case Studies</h5>
                <div className="flex justify-center items-center gap-[20px] pt-[15px] pb-[15px] h-[50px] w-[138px] rounded-xl border-solid border-main1 border-[2px]">
                    <h5 className="font-montserrat text-center font-semibold text-main1 text-lg">Book a Call</h5>
                </div>
                <div className="flex justify-center items-center gap-[30px]">
                    <img src={Twitter} alt="twitter" className="w-[45px] h-[45px] object-contain"/>
                    <img src={Linkedin} alt="linkedin" className="w-[45px] h-[45px] object-contain"/>
                </div>
            </div>
        </div>
    );
  };
  
export default Navbar;