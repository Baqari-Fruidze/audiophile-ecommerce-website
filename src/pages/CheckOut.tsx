import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "../schema/Yup";
import Summary from "../components/Summary";
import BillingDetails from "../components/BillingDetails";
import ShippingInfto from "../components/ShippingInfto";
import PaymentDetails from "../components/PaymentDetails";
import FinalOrder from "../components/FinalOrder";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const navigate = useNavigate();
  const [showList, setShowList] = useState<boolean>(true);
  const methods = useForm({ resolver: yupResolver(schema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  const foo = () => {
    console.log(errors);
    if (errors) {
      setShowList(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        className={`parent mb-[97px] pt-[16px] pb-[32px] px-[24px] md:pt-[48px] md:px-[40px] md:mb-[116px] relative  `}
      >
        <button
          className="text-[#000] text-[15px] font-light leading-[25px] opacity-50 "
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <form onSubmit={handleSubmit(foo)}>
          <div className="flex flex-col gap-[32px]">
            <div className="inputsCon mt-[24px] bg-[#fff] pt-[24px] pb-[32px] px-[24px] md:py-[30px] md:px-[28px]">
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
