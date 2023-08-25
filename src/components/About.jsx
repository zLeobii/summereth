import Vector1 from '../assets/vector1.svg';
import Vector2 from '../assets/vector2.svg';
import Vector3 from '../assets/vector3.svg';
import Arrow1 from '../assets/arrow1.svg';

const About = () => {
    return (
        <div className='flex items-center flex-col h-auto w-[100dvw] pt-[70px] pr-[10px] pl-[10px] bg-white gap-[150px]'>

          <div className='flex w-[330px] sm:w-[590px] lg:w-[950px] xl:w-[1179px] flex-col items-center gap-[35px]'>

            <div className='flex flex-col justify-center items-start gap-[12px] self-stretch'>
              <h2 className='text-black2 font-istokweb text-[37px] lg:text-[45px] font-[700]'>Are you struggling with...</h2>
              <p className='text-black3 font-inter text-[17px] lg:text-[20px] font-[400]'>We noticed these particular problems between agency owners</p>
            </div>

            <div className='flex flex-col xl:flex-row justify-center items-center self-stretch lg:self-auto gap-[50px] lg:gap-[100px] xl:gap-[49px]'>

              <div className='lg:flex lg:justify-center lg:items-center lg:gap-[230px] xl:hidden hidden'>
                <div className='flex w-[330px] h-[421px] sm:h-[744px] lg:w-[360px] lg:h-[452px] flex-col items-centerborder-solid border-black2 border-[1.5px]'>
                  <div className='flex h-[331px] sm:h-[590px] sm:w-[590px] lg:w-[360px] lg:h-[452px] justify-center items-center self-stretch sm:self-auto border-solid border-black2 border-[1.5px]'>
                    <img src={Vector1} alt="img" className='self-stretch'/>
                  </div>
                  <div className='flex pl-[20px] pr-[20px] gap-[20px] sm:gap-[50px] self-stretch sm:self-auto justify-center items-center h-[90px] sm:h-[154px] sm:w-[590px] lg:w-[360px] lg:h-[93px]'>
                    <p className='text-main2 font-istokweb text-[30px] sm:text-[45px] lg:text-[30px] font-[400] text-center'>1</p>
                    <p className='text-black3 font-montserrat text-[18px] sm:text-[25px] lg:text-[18px] font-[500] text-center'>Not being able to predict<br/>sales calls</p>
                  </div>
                </div>

                <div className='flex w-[330px] h-[421px] sm:h-[744px] lg:w-[360px] lg:h-[452px] flex-col items-center border-solid border-black2 border-[1.5px]'>
                  <div className='flex h-[331px] sm:h-[590px] sm:w-[590px] lg:w-[360px] lg:h-[452px] justify-center items-center self-stretch sm:self-auto border-solid border-black2 border-[1.5px]'>
                    <img src={Vector2} alt="img" className='self-stretch'/>
                  </div>
                  <div className='flex pl-[20px] pr-[20px] gap-[20px] sm:gap-[50px] self-stretch sm:self-auto justify-center items-center h-[90px] sm:h-[154px] sm:w-[590px] lg:w-[360px] lg:h-[93px]'>
                    <p className='text-main2 font-istokweb text-[30px] sm:text-[45px] lg:text-[30px] font-[400] text-center'>2</p>
                    <p className='text-black3 font-montserrat text-[18px] sm:text-[25px] lg:text-[18px] font-[500] text-center'>Agencies not<br/>delivering results</p>
                  </div>
                </div>
              </div>


              <div className='flex w-[330px] h-[421px] sm:h-[744px] sm:w-[588px] lg:w-[360px] lg:h-[452px] flex-col items-centerborder-solid border-black2 border-[1.5px] lg:hidden xl:flex'>
                <div className='flex h-[331px] sm:h-[590px] sm:w-[590px] lg:w-[360px] lg:h-[452px] justify-center items-center self-stretch sm:self-auto border-solid border-black2 border-[1.5px]'>
                  <img src={Vector1} alt="img" className='self-stretch'/>
                </div>
                <div className='flex pl-[20px] pr-[20px] gap-[20px] sm:gap-[50px] self-stretch sm:self-auto justify-center items-center h-[90px] sm:h-[154px] sm:w-[590px] lg:w-[360px] lg:h-[93px]'>
                  <p className='text-main2 font-istokweb text-[30px] sm:text-[45px] lg:text-[30px] font-[400] text-center'>1</p>
                  <p className='text-black3 font-montserrat text-[18px] sm:text-[25px] lg:text-[18px] font-[500] text-center'>Not being able to predict<br/>sales calls</p>
                </div>
              </div>

              <div className='flex w-[330px] h-[421px] sm:h-[744px] sm:w-[588px]  lg:w-[360px] lg:h-[452px] flex-col items-center border-solid border-black2 border-[1.5px] lg:hidden xl:flex'>
                <div className='flex h-[331px] sm:h-[590px] sm:w-[590px] lg:w-[360px] lg:h-[452px] justify-center items-center self-stretch sm:self-auto border-solid border-black2 border-[1.5px]'>
                  <img src={Vector2} alt="img" className='self-stretch'/>
                </div>
                <div className='flex pl-[20px] pr-[20px] gap-[20px] sm:gap-[50px] self-stretch sm:self-auto justify-center items-center h-[90px] sm:h-[154px] sm:w-[590px] lg:w-[360px] lg:h-[93px]'>
                  <p className='text-main2 font-istokweb text-[30px] sm:text-[45px] lg:text-[30px] font-[400] text-center'>2</p>
                  <p className='text-black3 font-montserrat text-[18px] sm:text-[25px] lg:text-[18px] font-[500] text-center'>Agencies not<br/>delivering results</p>
                </div>
              </div>

              <div className='flex w-[330px] h-[421px] sm:h-[744px] sm:w-[588px] lg:w-[360px] lg:h-[452px] flex-col items-centerborder-solid border-black2 border-[1.5px]'>
                <div className='flex h-[331px] sm:h-[590px] sm:w-[590px] lg:w-[360px] lg:h-[452px] justify-center items-center self-stretch sm:self-auto border-solid border-black2 border-[1.5px]'>
                  <img src={Vector3} alt="img" className='self-stretch'/>
                </div>
                <div className='flex pl-[20px] pr-[20px] gap-[20px] sm:gap-[50px] self-stretch sm:self-auto justify-center items-center h-[90px] sm:h-[154px] sm:w-[590px] lg:w-[360px] lg:h-[93px]'>
                  <p className='text-main2 font-istokweb text-[30px] sm:text-[45px] lg:text-[30px] font-[400] text-center'>3</p>
                  <p className='text-black3 font-montserrat text-[18px] sm:text-[25px] lg:text-[18px] font-[500] text-center'>Risking to ruin your brand<br/>with cold DMs</p>
                </div>
              </div>

            </div>
          </div>

          <div className='flex pr-[10px] pl-[10px] sm:pr-[20px] sm:pl-[20px] pt-[10px] pb-[10px] justify-center items-center gap-[10px] sm:gap-[20px] h-[66px] w-[350px] sm:h-[100px] sm:w-[620px] rounded-[10px] border-solid bg-black8 border-black1 border-[1px]'>
            <h5 className='text-black3 font-istokweb text-[20px] sm:text-[35px] font-[700] text-center'>We found a solution for you</h5>
            <img src={Arrow1} alt="arrow" className='object-contain h-[40px] w-[40px] sm:h-[76px] sm:w-[76px]'/>
          </div>

        </div>
    );
  };
  
export default About;