import Pinkline from "../assets/pinkline.svg";

const Calendly = () => {
    return (
        <div className="flex w-[100dvw] h-[579px] flex-col justify-center items-center gap-[70px]">
            <div className="flex w-[330px] flex-col justify-center items-center gap-[10px]">
              <h2 className="font-montserrat font-[800] text-[37px] text-center">Book Your Call Below</h2>
              <img src={Pinkline} alt="pinkline" className="object-contain w-[330px]" />
            </div>

    
          </div>
    );
  };
  
export default Calendly;