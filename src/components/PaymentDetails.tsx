import React, { useContext } from "react";
import Circle from "./Circle";
import { Context } from "../App";
import CashONDeliverySpan from "./CashONDeliverySpan";
import { useForm } from "react-hook-form";

export default function PaymentDetails() {
  const { yellow, setYellow } = useContext(Context);
  const { register } = useForm();
  return (
    <div>
      <h2 className="HTwoInCheckout">payment details</h2>
      <div className="inputsCon">
        <div className="paymentmethodAndMoneyInputsCon flex flex-col gap-[17px]">
          <span className="text-[#000] text-[12px] font-bold tracking-[-0.214px]">
            Payment Method
          </span>
          <div className="moneyInputs flex flex-col gap-[16px]">
            <label
              htmlFor="e-Money"
              className="InputStyles flex gap-[16px] items-center"
            >
              <Circle yellow={yellow} setYellow={setYellow} /> e-Money
            </label>
            <input
              type="text"
              id="e-Money"
              className="hidden"
              {...register("eMoney")}
            />
            <label
              htmlFor="CashonDelivery"
              className="InputStyles flex items-center gap-[16px] "
            >
              <Circle yellow={!yellow} setYellow={setYellow} /> Cash on Delivery
            </label>
            <input
              type="text"
              id="CashonDelivery"
              className="hidden"
              {...register("CashonDelivery")}
            />
          </div>
          {yellow ? (
            <div className="moneyPinMoneyNumberCon flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[9px]">
                <label
                  htmlFor="e-MoneyNumber"
                  className="InputsLabelsInCheckout"
                >
                  e-Money Number
                </label>
                <input
                  type="text"
                  placeholder="238521993"
                  id="e-MoneyNumber"
                  className="InputStyles"
                  {...register("eMoneyNumber")}
                />
              </div>
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="e-MoneyPIN" className="InputsLabelsInCheckout">
                  e-Money PIN
                </label>
                <input
                  type="text"
                  placeholder="6891"
                  id="e-MoneyPIN"
                  className="InputStyles"
                  {...register("eMoneyPIN")}
                />
              </div>
            </div>
          ) : null}
          <span></span>
        </div>
      </div>
      {yellow ? null : <CashONDeliverySpan />}
    </div>
  );
}
