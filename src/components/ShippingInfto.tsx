import React from "react";
import { useForm } from "react-hook-form";

export default function ShippingInfto() {
  const { register } = useForm();
  return (
    <div className="mb-[32px]">
      <h2 className="HTwoInCheckout">shipping info</h2>
      <div className="InputsCon flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="YourAddress" className="InputsLabelsInCheckout">
            Your Address
          </label>
          <input
            type="text"
            id="YourAddress"
            className="InputStyles"
            placeholder="1137 Williams Avenue"
            {...register("address")}
          />
        </div>
        <div className="zipcodeAndCityCon flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[9px]">
            <label htmlFor="ZIPCode" className="InputsLabelsInCheckout">
              ZIP Code
            </label>
            <input
              type="text"
              id="ZIPCode"
              className="InputStyles"
              placeholder="10001"
              {...register("zipCode")}
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <label htmlFor="City" className="InputsLabelsInCheckout">
              City
            </label>
            <input
              type="text"
              id="City"
              className="InputStyles"
              placeholder="New York"
              {...register("city")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="Country" className="InputsLabelsInCheckout">
            Country
          </label>
          <input
            type="text"
            id="Country"
            className="InputStyles"
            placeholder="United States"
            {...register("country")}
          />
        </div>
      </div>
    </div>
  );
}
