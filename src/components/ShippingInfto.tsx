import React from "react";

export default function ShippingInfto() {
  return (
    <div>
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
          />
        </div>
      </div>
    </div>
  );
}
