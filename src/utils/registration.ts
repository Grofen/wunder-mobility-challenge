import AddressInfo from "components/registration/address-info";
import PaymentInfo from "components/registration/payment-info";
import PersonalInfo from "components/registration/personal-info";

export const registrationDefaultFormValues = {
  accountOwner: "",
  address1: "",
  address2: "",
  city: "",
  firstName: "",
  houseNumber: "",
  iban: "",
  lastName: "",
  telephone: "",
  zip: "",
};

export const registrationSteps = [
  {
    label: "Personal Information",
    name: "personalInfo",
    Component: PersonalInfo,
  },
  {
    label: "Address",
    name: "addressInfo",
    Component: AddressInfo,
  },
  {
    label: "Payment",
    name: "paymentInfo",
    Component: PaymentInfo,
  },
  //   {
  //     label: "Review",
  //     name: "review",
  //     Component: Review,
  //   },
];
