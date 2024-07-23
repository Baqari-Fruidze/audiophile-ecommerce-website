import React from "react";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import { schema } from "../schema/Yup";
import Summary from "../components/Summary";
import BillingDetails from "../components/BillingDetails";
import ShippingInfto from "../components/ShippingInfto";
import PaymentDetails from "../components/PaymentDetails";

export default function CheckOut() {
  const methods = useForm({ resolver: yupResolver(schema) });
  return (
    <FormProvider {...methods}>
      <div className="parent pt-[16px] pb-[32px] px-[24px]">
        <Link className="text-[#000] text-[15px] font-light leading-[25px] opacity-50 ">
          Go Back
        </Link>
        <form>
          <div className="flex flex-col">
            <div className="inputsCon mt-[24px] bg-[#fff] pt-[24px] pb-[32px] px-[24px]">
              <h1 className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase mb-[32px]">
                CHECKOUT
              </h1>
              <BillingDetails />
              <ShippingInfto />
              <PaymentDetails />
            </div>
            <Summary />
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
