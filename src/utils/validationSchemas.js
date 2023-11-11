import * as yup from 'yup';

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  fullName: yup.string().trim().min(2).max(64).required(),
  phoneNumber: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/, "Phone number must match '+XX XXX XXX XX XX'")
    .required(),
});
