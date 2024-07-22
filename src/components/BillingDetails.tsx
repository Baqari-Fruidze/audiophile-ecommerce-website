import React from "react";

export default function BillingDetails() {
  return (
    <div className="mb-[32px]">
      <h2 className="HTwoInCheckout">billing details</h2>
      <div className="flex flex-col gap-[24px]">
        <div className=" NameAndEmailAdressCon flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[9px]">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              className="InputStyles"
              placeholder="Alexei Ward"
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <label htmlFor="EmailAddress">Email Address</label>
            <input
              type="text"
              id="EmailAddress"
              className="InputStyles"
              placeholder="alexei@mail.com"
            />
          </div>
        </div>
        <div className="PhonenumberCon flex flex-col gap-[9px]">
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            className="InputStyles"
            placeholder="alexei@mail.com"
          />
        </div>
      </div>
    </div>
  );
}
