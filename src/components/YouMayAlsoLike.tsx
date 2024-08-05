import { Product } from "../types/SingleObjType";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import data from "../data.json";

export default function YouMayAlsoLike({
  dataToShow,
}: {
  dataToShow: Product;
}) {
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)"
  );
  return (
    <div className="flex flex-col gap-[40px] px-[24px] items-center md:gap-[56px] md:px-[40px]">
      <h1 className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[36px]">
        you may also like
      </h1>
      <div className="flex flex-col gap-[56px] md:flex-row md:gap-[11px]">
        {dataToShow.others.map((el, index) => {
          return (
            <div
              className="flex flex-col gap-[32px] items-center md:gap-[35px]"
              key={index}
            >
              <div className="bg-[#F1F1F1] rounded-[8px] flex items-center justify-center">
                <img
                  src={
                    mobile
                      ? el.image.mobile
                      : tablet
                      ? el.image.tablet
                      : el.image.desktop
                  }
                  alt=""
                />
              </div>
              <p className="text-[24px] text-[#000] font-bold tracking-[1.714px] text-center">
                {el.name}
              </p>
              <Link
                to={`/ ${
                  data.find((item) => el.name === item.name)?.category
                }/ ${el.name}`}
                className="bg-[#D87D4A] text-[13px] text-[#fff] font-bold px-[31px] py-[14px] tracking-[1px]"
              >
                see product
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
