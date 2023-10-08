import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {
  AddressInfo,
  PaymentInfo,
  PersonalInfo,
  RegistrationState,
  RegistrationStep,
} from "types/registration";

const initialState: RegistrationState = {
  selectedStep: {
    index: 1,
    label: "Personal Info",
    name: "personalInfo",
  },
  steps: {
    personalInfo: {
      isValid: false,
      isDirty: false,
      values: { firstName: "", lastName: "", telephone: "" },
    },
    addressInfo: {
      isValid: false,
      isDirty: false,
      values: {
        address1: "",
        address2: "",
        houseNumber: "",
        city: "",
        zip: "",
      },
    },
    paymentInfo: {
      isValid: false,
      isDirty: false,
      values: { accountOwner: "", iban: "" },
    },
  },
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.steps.personalInfo = action.payload;
    },
    setAddressInfo: (state, action: PayloadAction<AddressInfo>) => {
      state.steps.addressInfo = action.payload;
    },
    setPaymentInfo: (state, action: PayloadAction<PaymentInfo>) => {
      state.steps.paymentInfo = action.payload;
    },
    setSelectedIndex: (state, action: PayloadAction<RegistrationStep>) => {
      state.selectedStep = action.payload;
    },
  },
});

export const {
  setAddressInfo,
  setPaymentInfo,
  setPersonalInfo,
  setSelectedIndex,
} = registrationSlice.actions;

export const selectRegistration = (state: RootState) => state.registration;

export default registrationSlice.reducer;
