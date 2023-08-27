import Logo from "../assets/logo2.png";
import Twitter from "../assets/twitterwhite.svg";
import TwitterActive from "../assets/twitter2active.svg";
import Linkedin from "../assets/linkedinwhite.svg";
import LinkedinActive from "../assets/linkedin2active.svg";

const Footer = () => {
    return (
        <div className="flex flex-col justify-end items-center gap-[70px] pt-[40px] pb-[40px] w-[100dvw] h-[371px] xl:h-[454px] bg-black3">
            <div className="flex flex-col justify-center items-center gap-[60px]">
              <a href="https://summereth.com" rel="noreferrer" className="cursor-pointer overflow-hidden">
                <img src={Logo} alt="logo" className="cursor-pointer object-contain w-[100px] h-[81px] xl:w-[115px] xl:h-[93px]" />
              </a>
              <div className="flex items-start gap-[30px] overflow-hidden">
                <a href="https://twitter.com/Summereth_eth" target="_blank" rel="noreferrer" className="cursor-pointer group">
                  <img src={Twitter} alt="twitter" className="object-contain w-[45px] h-[45px] xl:w-[55px] xl:h-[55px] sm:group-hover:hidden transition duration-250 ease-out" />
                  <img src={TwitterActive} alt="twitter" className="object-contain w-[45px] h-[45px] xl:w-[55px] xl:h-[55px] hidden sm:group-hover:flex transition duration-250 ease-out" />
                </a>
                <a href="https://www.linkedin.com/in/summereth/" target="_blank" rel="noreferrer" className="cursor-pointer group">
                  <img src={Linkedin} alt="linkedin" className="object-contain w-[45px] h-[45px] xl:w-[55px] xl:h-[55px] sm:group-hover:hidden transition duration-250 ease-out" />
                  <img src={LinkedinActive} alt="linkedin" className="object-contain w-[45px] h-[45px] xl:w-[55px] xl:h-[55px] hidden sm:group-hover:flex transition duration-250 ease-out" />
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center gap-[10px]">
              <p className="font-montserrat font-[400] text-center text-[15px] xl:text-[18px] text-black9">Convinced?</p>
              <a href="https://calendly.com/robertocarloni/summereth_leadgen?month=2023-08" rel="noreferrer" target="_blank" className="cursor-pointer group">
                <div className="transition duration-250 ease-out group sm:group-hover:bg-main1 flex justify-center items-center pt-[15px] pb-[15px] gap-[20px] h-[41px] w-[113px] xl:h-[50px] xl:w-[138px] rounded-[10px] border-solid border-main1 border-[2px] overflow-hidden">
                  <p className="transition duration-250 ease-out font-montserrat font-[600] text-center text-[15px] xl:text-[18px] text-main1 sm:group-hover:text-black3 overflow-hidden">Book a Call</p>
                </div>
              </a>
            </div>
        </div>
    );
  };
  
export default Footer;