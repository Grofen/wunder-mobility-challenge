import Input from "components/shared/input";
import { Controller, Path } from "react-hook-form";
import {
  RegistrationFormInput,
  RegistrationFormProps,
} from "types/registration";

const PaymentInfo = <T extends RegistrationFormInput>({
  control,
}: RegistrationFormProps<T>): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Controller
        control={control}
        name={"accountOwner" as Path<T>}
        render={({ field }) => (
          <Input
            label="Account Owner"
            placeholder="eg. Mohammad Ghorab"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name={"iban" as Path<T>}
        render={({ field }) => (
          <Input
            label="IBAN"
            placeholder="eg. DE00 1234 5678 9101 1121 31"
            {...field}
          />
        )}
      />
    </div>
  );
};

export default PaymentInfo;
