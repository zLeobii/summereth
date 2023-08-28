import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.png';

const System = () => {
    return (
        <div className='flex w-[100dvw] h-[1300px] xl:h-[800px] pt-[100px] pr-[10px] pl-[10px] flex-col items-center gap-[50px]' id='system'>
            <div className='flex w-[330px] sm:w-[564.5px] xl:w-[1179px] flex-col justify-center items-center gap-[20px]'>
              <h1 className='text-black2 font-istokweb text-[30px] sm:text-[45px] font-[700] text-center overflow-hidden'>Our Killer Strategies</h1>
              <p className='text-black3 font-inter text-[17px] sm:text-[20px] font-[400] text-center overflow-hidden'>Our personalized outreach, to get, not only fast <br className='hidden lg:flex'/>replies, but quality leads.</p>
            </div>

            <div className='flex w-[330px] sm:w-[564.5px] xl:w-[1179px] flex-col xl:flex-row justify-center items-center gap-[50px]'>
              
              <div className='flex w-[330px] h-[425px] sm:h-[326px] sm:w-[564.5px] flex-col justify-center items-center border-solid border-black1 border-[1.5px]'>
                <div className='flex h-[115px] sm:h-[90px] p-[10px] gap-[15px] justify-center items-center self-stretch bg-[#0077B5] border-solid border-black1 border-[1.5px]'>
                  <img src={linkedin} alt="linkedin" className='object-contain h-[40px] w-[40px]'/>
                  <h3 className='text-white text-center font-istokweb text-[25px] font-[700]'>Linkedin Outreach</h3>
                </div>

                <div className='flex justify-center items-center gap-[10px] p-[30px] h-[310px] sm:h-[236px] flex-col self-stretch border-solid border-black1 border-[1.5px]'>
                  <div className='flex flex-col items-center justify-center gap-[30px] self-stretch'>
                    <h3 className='text-black1 text-center font-montserrat text-[22px] sm:text-[24px] font-[600] overflow-hidden'>Organic DMs + InMails</h3>
                    <p className='text-black3 text-center font-inter text-[20px] font-[400] overflow-hidden'>An Organic Connection DM that gets warm leads slower + a Sales Navigator Inmail strategy that gets booked calls just like cold emails</p>
                  </div>
                </div>
              </div>

              <div className='flex w-[330px] h-[425px] sm:h-[326px] sm:w-[564.5px] flex-col justify-center items-center border-solid border-black1 border-[1.5px]'>
                <div className='flex h-[115px] sm:h-[90px] p-[10px] gap-[15px] justify-center items-center self-stretch bg-black border-solid border-black1 border-[1.5px]'>
                  <img src={x} alt="x" className='object-contain h-[40px] w-[40px]'/>
                  <h3 className='text-white text-center font-istokweb text-[25px] font-[700]'>X Outreach</h3>
                </div>

                <div className='flex justify-center items-center gap-[10px] p-[30px] h-[310px] sm:h-[236px] flex-col self-stretch border-solid border-black1 border-[1.5px]'>
                  <div className='flex flex-col items-center justify-center gap-[30px] self-stretch'>
                    <h3 className='text-black1 text-center font-montserrat text-[22px] sm:text-[24px] font-[600] overflow-hidden'>1-2 Punch Scripts</h3>
                    <p className='text-black3 text-center font-inter text-[20px] font-[400] overflow-hidden'>A fast strategy that consist of 2 questions: 1 personalized message to ask them if they are actually willing to learn more, and a killer pitch</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='w-[330px] sm:w-[564.5px] xl:w-[1179px] overflow-hidden'>
              <h1 className='text-black2 font-istokweb text-[20px] sm:text-[30px] font-[700] text-center overflow-hidden'>You only pay per prospect that shows up to a meeting with you</h1>
            </div>
        </div>
    );
  };
  
export default System;