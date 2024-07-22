import React, { useContext } from "react";
import Circle from "./Circle";
import { Context } from "../App";

export default function PaymentDetails() {
  const { yellow, setYellow } = useContext(Context);

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
            <input type="text" name="" id="e-Money" className="hidden" />
            <label
              htmlFor="CashonDelivery"
              className="InputStyles flex items-center gap-[16px] "
            >
              <Circle yellow={!yellow} setYellow={setYellow} /> Cash on Delivery
            </label>
            <input type="text" name="" id="CashonDelivery" className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
