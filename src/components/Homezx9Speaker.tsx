import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Homezx9Speaker() {
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)"
  );
  return (
    <div className="parent bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-cover bg-[center_top_-140px] bg-no-repeat bg-[#D87D4A] rounded-[8px] py-[55px] px-[23px] w-full flex flex-col items-center gap-[32px] md:gap-[64px] md:py-[65px] des:py-[1px] des:pt-[96px] des:flex-row des:px-[120px] overflow-hidden">
      <img
        src={
          mobile
            ? "/assets/home/mobile/image-speaker-zx9.png"
            : tablet
            ? "/assets/home/tablet/image-speaker-zx9.png"
            : "/assets/home/desktop/image-speaker-zx9.png"
        }
        alt=""
        className="w-[172px]  h-[207px] md:w-[197px] md:h-[237px] des:w-[410px] des:h-[493px] des:mb-[-10px]"
      />
      <div className="flex flex-col items-center gap-[24px] des:self-start">
        <h1 className="text-[36px] text-[#fff] font-bold tracking-[1.25px] uppercase text-center w-[7ch] leading-[40px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
          ZX9 SPEAKER
        </h1>
        <p className="text-[15px] font-normal leading-[25px] text-[#fff] text-center opacity-75 md:w-[36ch]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          to={"/speakers/ZX9 Speaker"}
          className="bg-[#000] text-[13px] text-[#fff] font-bold tracking-[1px] uppercase py-[15px] px-[30px]"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
