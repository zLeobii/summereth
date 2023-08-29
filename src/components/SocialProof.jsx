import Metaneur from "../assets/metaneur.png";
import Proof1 from "../assets/socialproof1.svg";
import Proof2 from "../assets/socialproof2.svg";
import Proof3 from "../assets/socialproof3.svg";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import Icon4 from "../assets/icon4.svg";
import Icon5 from "../assets/icon5.svg";
import Icon6 from "../assets/icon6.svg";
import Icon7 from "../assets/icon7.svg";

const SocialProof = () => {
    return (
        <div id="casestudy" className="flex w-[100dvw] h-[2300px] sm:h-[1900px] xl:h-[1747px] flex-col justify-center items-center gap-[50px] xl:gap-[120px]">
            <div className="flex w-[330px] sm:w-[570px] xl:w-[1180px] h-[1460px] sm:h-auto flex-col items-start rounded-[15px] border-solid border-black1 border-[2px] overflow-hidden">
              <div className="flex flex-col xl:flex-row pt-[40px] pb-[40px] pl-[20px] pr-[20px] gap-[30px] xl:gap-[60px] self-stretch justify-center items-center h-[388px] xl:h-[176px] rounded-[15px] overflow-hidden bg-black8">
                <div className="flex w-[286px] xl:w-auto items-start flex-col gap-[20px]">
                  <h5 className="text-black2 font-inter text-[17px] xl:text-[20px] font-[400]">CASE STUDY</h5>
                  <h2 className="text-black1 font-istokweb text-[32px] xl:text-[43px] font-[700]">METANEUR - $30K IN 7 WEEKS</h2>
                </div>
                <div className="flex justify-center items-center h-[97px] xl:h-[104px] w-[286px] xl:w-[388px] rounded-[20px] overflow-hidden bg-black1">
                  <img src={Metaneur} alt="metaneur" className="self-stretch object-contain" />
                </div>
              </div>

              <div className="flex flex-col xl:flex-row justify-center items-center self-stretch">
                <div className="flex flex-col justify-center items-center self-stretch gap-[30px] h-[424px] xl:h-[631px] xl:w-[590px] p-[10px] border-solid border-black1 border-[1px] overflow-hidden">
                  <div className="flex justify-center items-center p-[20px] h-[120px] w-[286px] xl:w-[536px] xl:h-[190px] rounded-[10px] border-solid border-[2px] border-black1 overflow-hidden">
                    <img src={Proof1} alt="socialproof" className="object-contain w-[262px] h-[80px] xl:w-[496px] xl:h-[150px] overflow-hidden" />
                  </div>
                  <div className="flex justify-center items-center p-[20px] h-[59px] w-[286px] xl:w-[536px] xl:h-[91px] rounded-[10px] border-solid border-[2px] border-black1 overflow-hidden">
                    <img src={Proof2} alt="socialproof" className="object-contain w-[262px] h-[28px] xl:w-[496px] xl:h-[52.3px]" />
                  </div>
                  <div className="flex justify-center items-center p-[20px] w-[286px] rounded-[10px] xl:w-[536px] xl:h-[190px] border-solid border-[2px] border-black1 overflow-hidden">
                    <img src={Proof3} alt="socialproof" className="object-contain w-[262px] h-[80px] xl:w-[496px] xl:h-[150px]" />
                  </div>
                </div>
                <div className="flex flex-col items-center self-stretch gap-[10px] pt-[50px] pb-[50px] pl-[40px] pr-[40px] border-solid border-black1 border-[1px] overflow-hidden">
                  <div className="flex flex-col items-center self-stretch gap-[15px] xl:w-[510px]">
                    <h2 className="text-black1 font-montserrat text-[27px] xl:text-[35px] font-[600] overflow-hidden">$30K IN 7 WEEKS</h2>
                    <p className="text-black3 font-inter text-[17.3px] xl:text-[24.5px] font-[400] overflow-hidden">When Alex Karcz (the founder of Metaneur) came to us: <br />
-He was 100% relying on referrals and inbound <br />
-He was growing a small brand and he was scared of ruining it with cold dms <br />
-He already worked with a scam “lead gen agency” that stole him money <br />
We studied his offer, built a complete outreach strategy, and made him $10k in the first 2 weeks of working together. <br />
In total, during the span of 7 weeks working together, we generated $30k in closed deals for Metaneur! <br /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-[50px] w-[330px] sm:w-[600px] xl:w-[1179px] h-[589px]">
              <h1 className="text-black2 font-istokweb text-[37px] xl:text-[45px] font-[700] overflow-hidden">Also trusted by:</h1>
              <div className="flex w-[330px] sm:w-[600px] xl:w-[1179px] h-[458px] flex-col items-center gap-[20px] sm:gap-[40px]">
                <div className="flex justify-center items-center self-stretch gap-[20px] h-[140px] sm:hidden">
                  <img src={Icon1} alt="icon" className="object-contain w-[85px] h-[85px]" />
                  <img src={Icon2} alt="icon" className="object-contain w-[85px] h-[85px] rounded-full border-solid border-[1px] border-black1" />
                  <img src={Icon3} alt="icon" className="object-contain w-[85px] h-[85px] rounded-full border-solid border-[1px] border-black1" />
                </div>
                <div className="flex justify-center items-center self-stretch gap-[20px] h-[140px] sm:hidden">
                  <img src={Icon4} alt="icon" className="object-contain w-[85px] h-[85px]" />
                  <img src={Icon5} alt="icon" className="object-contain w-[85px] h-[85px] rounded-full border-solid border-[1px] border-black1" />
                </div>
                <div className="flex justify-center items-center self-stretch gap-[20px] h-[140px] sm:hidden">
                  <img src={Icon6} alt="icon" className="object-contain w-[85px] h-[85px]" />
                  <img src={Icon7} alt="icon" className="object-contain w-[85px] h-[85px]" />
                </div>

                <div className="flex justify-center items-center self-stretch gap-[20px] sm:gap-[40px] xl:gap-[200px] h-[140px] xl:h-[153px] max-sm:hidden">
                  <img src={Icon1} alt="icon" className="object-contain w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]" />
                  <img src={Icon2} alt="icon" className="object-contain w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] rounded-full border-solid border-[1px] border-black1"/>
                  <img src={Icon3} alt="icon" className="object-contain w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] rounded-full border-solid border-[1px] border-black1" />
                  <img src={Icon4} alt="icon" className="object-contain w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]" />
                </div>
                <div className="flex justify-center items-center self-stretch gap-[20px] sm:gap-[40px] xl:gap-[200px] h-[140px] xl:h-[153px] max-sm:hidden">
                  <img src={Icon5} alt="icon" className="object-contain w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] rounded-full border-solid border-[1px] border-black1" />
                  <img src={Icon6} alt="icon" className="object-contain w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]" />
                  <img src={Icon7} alt="icon" className="object-contain w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]" />
                </div>
              </div>
            </div>
        </div>
    );
  };
  
export default SocialProof;