import Pinkline from "../assets/pinkline.svg";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
    return (
        <div className="flex w-[100dvw] h-[800px] flex-col justify-center items-center gap-[70px]" id="calendly">
            <div className="flex w-[330px] flex-col justify-center items-center gap-[10px]">
              <h2 className="font-montserrat font-[800] text-[37px] text-center overflow-hidden">Book Your Call Below</h2>
              <img src={Pinkline} alt="pinkline" className="object-contain w-[330px]" />
            </div>

            <InlineWidget url="https://calendly.com/robertocarloni/summereth_leadgen" />
          </div>
    );
  };
  
export default Calendly;