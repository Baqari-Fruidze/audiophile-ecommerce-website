import { useMediaQuery } from "@uidotdev/usehooks";

export default function Person() {
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)"
  );
  return (
    <div className="parent flex flex-col gap-[32px] items-center px-[24px] mb-[120px] md:px-[40px] md:gap-[63px] md:mb-[96px] des:flex-row des:px-[165px] des:mb-[160px]">
      <img
        src={
          mobile
            ? "/assets/shared/mobile/image-best-gear.jpg"
            : tablet
            ? "/assets/shared/tablet/image-best-gear.jpg"
            : "/assets/shared/desktop/image-best-gear.jpg"
        }
        alt=""
        className="rounded-[8px] w-full order-1"
      />
      <div className="flex flex-col gap-[32px] ">
        <p className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase text-center md:text-[40px] md:leading-[44px] md:tracking-[1.429px] ">
          Bringing you the <br />
          <span className="text-[#D87D4A] text-[28px] font-bold tracking-[1px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.429px]">
            best
          </span>{" "}
          audio gear
        </p>
        <p className="text-[#000] text-[15px] font-normal text-center opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
