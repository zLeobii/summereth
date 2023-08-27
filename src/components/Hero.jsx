import Open from "../assets/open1.svg";
import OpenActive from "../assets/openactive.svg";
import '../index.css';

const Hero = () => {
    return (
        <div className="flex w-[100dvw] lg:justify-center h-[1000px] lg:h-[75dvh] pt-[50px] lg:pt-[125px] pr-[30px] pl-[30px] items-center lg:items-start flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] lg:flex-row cool">
            <div className="flex flex-col justify-center items-center gap-[20px] lg:w-[378px]">
              <div className="flex flex-col justify-center gap-[10px] items-center">
                <h5 className="text-main1 font-montserrat text-center lg:text-left text-[20px] sm:text-[23px] xl:text-[26px] font-semibold w-full">AGENCY OWNERS:</h5>
                <h1 className="text-black1 font-istokweb text-center lg:text-left text-[30px] sm:text-[34px] xl:text-[37px] font-bold">Get An Extra 5-10 Qualified Sales Calls Per Month Through Organic LinkedIn And Twitter Cold DMs</h1>
              </div>
              <a href="https://calendly.com/robertocarloni/summereth_leadgen" rel="noreferrer" target="_blank" className="cursor-pointer lg:w-full">
                <div className="group sm:hover:bg-main2 transition duration-250 ease-out hidden lg:flex w-[275px] h-[85px] pt-[15px] pb-[15px] justify-center items-center gap-[7px] rounded-[7px] border-solid bg-main1 border-black1 border-[1.5px]">
                  <h5 className="text-black9 sm:group-hover:text-black8 transition duration-250 ease-out font-montserrat text-[30px] font-[600] text-center">Book a Call</h5>
                  <img src={Open} alt="open" className="object-contain w-[40px] h-[40px] transition duration-250 ease-out sm:group-hover:hidden"/>
                  <img src={OpenActive} alt="open" className="object-contain w-[40px] h-[40px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                </div>
              </a>
            </div>

            <iframe src="https://player.vimeo.com/video/76729370?h=6c4126e64c" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="w-[331px] h-[177.114px] min-[450px]:w-[420px] min-[450px]:h-[325px] sm:w-[550px] sm:h-[325px] lg:w-[800px] lg:h-[425px] flex justify-center items-center" alt="video"></iframe>
            
            <a href="https://calendly.com/robertocarloni/summereth_leadgen" rel="noreferrer" target="_blank" className="cursor-pointer">
              <div className="lg:hidden flex w-[206px] h-[58px] pt-[15px] pb-[15px] justify-center items-center gap-[7px] rounded-[7px] border-solid bg-main1 border-black1 border-[1.5px] overflow-hidden">
                <h5 className="text-black9 font-montserrat text-[22px] sm:text-[25px] font-[600] text-center">Book a Call</h5>
                <img src={Open} alt="open" className="object-contain w-[30px] h-[30px]"/>
              </div>
            </a>
        </div>
    );
  };
  
export default Hero;