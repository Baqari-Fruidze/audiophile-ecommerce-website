import React from "react";
import { useForm } from "react-hook-form";

export default function BillingDetails() {
  const {
    register,
    formState: { errors },
  } = useForm();
  console.log(errors.name);
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
              className={`InputStyles border-[1px] border-[solid] ${
                errors.name ? "border-[red]" : "border-[#CFCFCF]"
              }`}
              placeholder="Alexei Ward"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <label htmlFor="EmailAddress">Email Address</label>
            <input
              type="text"
              id="EmailAddress"
              className="InputStyles"
              placeholder="alexei@mail.com"
              {...register("EmailAddress")}
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
            {...register("phoneNumber")}
          />
        </div>
      </div>
    </div>
  );
}
