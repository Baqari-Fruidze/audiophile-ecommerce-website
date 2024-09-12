import { useFormContext } from "react-hook-form";

export default function BillingDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-[32px] md:mb-[53px]">
      <h2 className="HTwoInCheckout">billing details</h2>
      <div className="flex flex-col gap-[24px]">
        <div className=" NameAndEmailAdressCon flex flex-col gap-[24px] md:flex-row md:w-full">
          <div className="flex flex-col gap-[9px] md:w-full">
            <label htmlFor="Name" className="InputsLabelsInCheckout">
              Name
            </label>
            <input
              type="text"
              id="Name"
              className={`InputStyles border-[1px] border-solid ${
                errors.name ? "border-[red]" : "border-[#CFCFCF]"
              }`}
              placeholder="Alexei Ward"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-[9px] md:w-full">
            <label htmlFor="EmailAddress" className="InputsLabelsInCheckout">
              Email Address
            </label>
            <input
              type="text"
              id="EmailAddress"
              className={`InputStyles border-[1px] border-solid ${
                errors.EmailAddress ? "border-[red]" : "border-[#CFCFCF]"
              }`}
              placeholder="alexei@mail.com"
              {...register("EmailAddress")}
            />
          </div>
        </div>
        <div className="PhonenumberCon flex flex-col gap-[9px]">
          <label htmlFor="phoneNumber" className="InputsLabelsInCheckout">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className={`InputStyles border-[1px] border-solid ${
              errors.phoneNumber ? "border-[red]" : "border-[#CFCFCF]"
            }`}
            placeholder="+1 202-555-0136"
            {...register("phoneNumber")}
          />
        </div>
      </div>
    </div>
  );
}
