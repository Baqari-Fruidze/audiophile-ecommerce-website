import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "../schema/Yup";
import Summary from "../components/Summary";
import BillingDetails from "../components/BillingDetails";
import ShippingInfto from "../components/ShippingInfto";
import PaymentDetails from "../components/PaymentDetails";
import FinalOrder from "../components/FinalOrder";
import { useNavigate } from "react-router-dom";
import Burger from "../components/Burger";
import { Context } from "../App";

export default function CheckOut() {
  const { burgerShow, showList, setShowList } = useContext(Context);
  const navigate = useNavigate();

  const methods = useForm({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const foo = () => {
    if (errors) {
      setShowList(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        className={`parent mb-[97px] pt-[16px] pb-[32px] px-[24px] md:pt-[48px] md:px-[40px] md:mb-[116px] relative des:px-[165px] des:pt-[80px]  `}
      >
        {burgerShow ? <Burger /> : null}
        <button
          className="text-[#000] text-[15px] font-light leading-[25px] opacity-50 "
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <form onSubmit={handleSubmit(foo)}>
          <div className="flex flex-col gap-[32px] des:flex-row des:gap-[30px] ">
            <div className="inputsCon mt-[24px] bg-[#fff] pt-[24px] pb-[32px] px-[24px] md:py-[30px] md:px-[28px] des:mt-[38px] des:py-[52px] des:px-[48px]">
              <h1 className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase mb-[32px] md:mb-[41px] md:text-[31px] md:leading-[36px] md:tracking-[1.1143px]">
                CHECKOUT
              </h1>
              <BillingDetails />
              <ShippingInfto />
              <PaymentDetails />
            </div>
            <Summary />
          </div>
        </form>
        {showList ? <FinalOrder /> : null}
      </div>
    </FormProvider>
  );
}
