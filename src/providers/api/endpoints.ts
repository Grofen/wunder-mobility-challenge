import axios from "axios";
import { apiBaseUrl } from "../../config";
import {
  CreateRegistrationPaymentNetworkResponse,
  RegistrationFormInput,
} from "types/registration";
import toast from "react-hot-toast";

export default {
  createRegistrationPayment: async (
    body: RegistrationFormInput
  ): Promise<CreateRegistrationPaymentNetworkResponse | undefined> => {
    try {
      const response = await axios.post(`${apiBaseUrl}`, body);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      return undefined;
    }
  },
};
