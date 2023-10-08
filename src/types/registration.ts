import { FormEvent } from "react";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";

export type FormSteps = {
  isValid: boolean;
  isDirty: boolean;
};

export type PersonalInfo = FormSteps & {
  values: {
    firstName: string;
    lastName: string;
    telephone: string;
  };
};

export type AddressInfo = FormSteps & {
  values: {
    address1: string;
    address2: string;
    houseNumber: string;
    city: string;
    zip: string;
  };
};

export type PaymentInfo = FormSteps & {
  values: { accountOwner: string; iban: string };
};

export type RegistrationStep = {
  index: number;
  label: string;
  name: string;
};

export type RegistrationState = {
  selectedStep: RegistrationStep;
  steps: {
    personalInfo: PersonalInfo;
    addressInfo: AddressInfo;
    paymentInfo: PaymentInfo;
  };
};

export type RegistrationFormInput = {
  firstName: string;
  lastName: string;
  telephone: string;
  address1: string;
  address2?: string;
  houseNumber: string;
  city: string;
  zip: string;
  accountOwner: string;
  iban: string;
};

export type HandleFormSubmit = (
  event: FormEvent<HTMLFormElement>
) => Promise<void>;

export type RegistrationFormProps<T extends RegistrationFormInput> = {
  control: Control<T>;
  errors?: FieldErrors<T>;
  getValues?: UseFormGetValues<T>;
  handleFormSubmit?: HandleFormSubmit;
  setValue?: UseFormSetValue<T>;
};

export type CreateRegistrationPaymentNetworkResponse = {
  customerId: number;
  iban: string;
  owner: string;
};
