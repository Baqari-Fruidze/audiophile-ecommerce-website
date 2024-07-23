import * as yup from "yup";
export const schema = yup.object({
  name: yup.string().required(),
  EmailAddress: yup.string().required(),
  phoneNumber: yup.string().required(),
  address: yup.string().required(),
  zipCode: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  eMoney: yup.string().required(),
  ashonDelivery: yup.string().required(),
  eMoneyNumber: yup.string().required(),
  eMoneyPIN: yup.string().required(),
});
