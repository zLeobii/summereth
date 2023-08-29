import Open from "../assets/open1.svg";
import OpenActive from "../assets/openactive.svg";
import Arrow1 from "../assets/arrow1.svg";
import Arrow2 from "../assets/arrow2.svg";
import Lunar from "../assets/lunar.png";
import ShareMint from "../assets/sharemint.png";
import ArrowDown from "../assets/arrowdown.svg";
import Timeline1 from "../assets/Timeline1.svg";
import Timeline2 from "../assets/Timeline2.svg";

const GrowthProcess = () => {
    return (
        <div className="flex w-[100dvw] h-[2900px] sm:h-[3250px] md:h-[3100px] xl:h-[1800px] pt-[100px] flex-col items-center gap-[100px] cool">
            <div className="flex flex-col items-center w-[330px] sm:w-[564.5px] lg:w-[1000px] xl:w-[1179px] gap-[100px]">
              <div className="flex w-[330px] sm:w-[564.5px] lg:w-[1000px] flex-col justify-center items-center gap-[20px]">
                <h2 className="text-black2 font-istokweb text-center text-[35px] sm:text-[45px] font-[700] overflow-hidden">Increase your Leads, Explode your Sales</h2>
                <p className="text-black3 font-inter text-center text-[17px] sm:text-[20px] font-[400] overflow-hidden">Our ideal growth process explained easily.</p>
                <a href="https://calendly.com/robertocarloni/summereth_leadgen" rel="noreferrer" target="_blank" className="cursor-pointer">
                  <div className="group sm:hover:bg-main2 transition duration-250 ease-out flex justify-center items-center w-[206px] h-[58px] sm:w-[271px] sm:h-[61px] pt-[15px] pb-[15px] gap-[7px] rounded-[7px] border-solid bg-main1 border-black1 border-[1.5px] overflow-hidden">
                    <h4 className="text-black9 sm:group-hover:text-black8 transition duration-250 ease-out font-montserrat text-center text-[22px] sm:text-[18px] font-[600]">Book a Call <span className="max-sm:hidden sm:group-hover:text-black8 transition duration-250 ease-out">Today</span></h4> 
                    <img src={Open} alt="open" className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] object-contain transition duration-250 ease-out sm:group-hover:hidden" />
                    <img src={OpenActive} alt="open" className="object-contain w-[32px] h-[32px] transition duration-250 ease-out hidden sm:group-hover:flex"/>
                  </div>
                </a>

              </div>

              <div className="flex w-[330px] sm:w-[564.5px] lg:w-[1000px] flex-col items-center gap-[50px] xl:gap-[100px]">
                <div className="flex flex-col items-center gap-[35px] w-[330px] sm:w-[564.5px] lg:w-[1000px] overflow-hidden">
                  <h2 className="text-black2 font-istokweb text-center text-[37px] sm:text-[45px] font-[700] overflow-hidden">How fast will we get these results?</h2>
                </div>
                <img src={Timeline1} alt="timeline" className="object-contain w-[330px] h-[1179px] xl:hidden" />
                <img src={Timeline2} alt="timeline" className="object-contain h-[321px] w-[1179px] max-xl:hidden" />
              </div>
            </div>

            <div className="flex flex-col items-center w-[330px] sm:w-[630px] lg:w-[1000px] xl:w-[1200px] gap-[50px]">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-[10px] sm:gap-[20px] pr-[30px] pl-[30px] pt-[10px] pb-[10px] h-[123px] w-[330px] sm:h-[153px] sm:w-[620px] rounded-[10px] border-solid bg-black8 border-black1 border-[1px] overflow-hidden">
                <img src={Arrow2} alt="arrow" className="object-contain w-[76px] h-[76px] max-sm:hidden" />
                <h3 className="text-black3 font-istokweb text-center text-[20px] sm:text-[35px] font-[700] overflow-hidden">How are you sure that we can be that fast?</h3>
                <img src={ArrowDown} alt="arrow" className="object-contain w-[40px] h-[40px] sm:hidden" />
                <img src={Arrow1} alt="arrow" className="object-contain w-[76px] h-[76px] max-sm:hidden" />
              </div>
              
              <div className="flex w-[330px] sm:w-[572px] lg:w-[1000px] xl:w-[1200px] flex-col xl:flex-row justify-center items-start lg:items-center gap-[35px]">

                <div className="flex w-[330px] sm:w-[572px] flex-col items-center gap-[100px] justify-center">
                  <div className="flex p-[30px] flex-col justify-center items-center gap-[25px] self-stretch rounded-[10px] border-solid bg-white border-black1 border-[2px] overflow-hidden sm:gap-[50px] sm:pr-[30px] sm:pl-[30px] sm:pt-[30px] sm:pb-[30px]">
                    <div className="flex w-[270px] sm:w-[518px] h-[101px] sm:h-[194px] justify-center items-center border-solid bg-white border-black1 border-[2px] overflow-hidden">
                      <img src={Lunar} alt="Lunar" className="object-contain h-[270px] sm:h-[400px]"/>
                    </div>
                    <div className="flex flex-col items-center gap-[50px] self-stretch">
                      <div className="h-[140px] sm:w-[427px] sm:h-[170px] self-stretch sm:self-auto">
                        <h5 className="text-black1 font-montserrat text-center text-[18px] sm:text-[24px] font-[600]">$5,000 in less than a week</h5>
                        <p className="text-black3 font-inter text-center text-[15px] sm:text-[20px] font-[400]">We generated $5,000 in less than a week with organic LinkedIn Outreach. (We also made them $15k worth of closed deals in 2 months of work)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-[330px] sm:w-[572px] flex-col items-center gap-[100px] justify-center">
                  <div className="flex p-[30px] flex-col justify-center items-center gap-[25px] self-stretch rounded-[10px] border-solid bg-white border-black1 border-[2px] overflow-hidden sm:gap-[50px] sm:pr-[30px] sm:pl-[30px] sm:pt-[30px] sm:pb-[30px]">
                    <div className="flex w-[270px] sm:w-[518px] h-[101px] sm:h-[194px] justify-center items-center border-solid bg-white border-black1 border-[2px] overflow-hidden">
                      <img src={ShareMint} alt="ShareMint" className="object-contain h-[270px] sm:h-[400px]"/>
                    </div>
                    <div className="flex flex-col items-center gap-[50px] self-stretch">
                      <div className="h-[140px] sm:w-[427px] sm:h-[170px] self-stretch sm:self-auto">
                        <h5 className="text-black1 font-montserrat text-center text-[18px] sm:text-[24px] font-[600]">15 calls in 5 days</h5>
                        <p className="text-black3 font-inter text-center text-[15px] sm:text-[20px] font-[400]">We got them 15 booked calls that lead to 3 closed deals in just 5 days of Twitter DMs. (We generated $8k for them in the first month)</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
    );
  };
  
export default GrowthProcess;