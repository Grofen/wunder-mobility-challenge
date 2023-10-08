import Input from "components/shared/input";
import { Controller, Path } from "react-hook-form";
import {
  RegistrationFormInput,
  RegistrationFormProps,
} from "types/registration";

const PersonalInfo = <T extends RegistrationFormInput>({
  control,
}: RegistrationFormProps<T>): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Controller
        control={control}
        name={"firstName" as Path<T>}
        render={({ field }) => (
          <Input label="First Name" placeholder="eg. Mohammad" {...field} />
        )}
      />
      <Controller
        control={control}
        name={"lastName" as Path<T>}
        render={({ field }) => (
          <Input label="Last Name" placeholder="eg. Ghorab" {...field} />
        )}
      />
      <Controller
        control={control}
        name={"telephone" as Path<T>}
        render={({ field }) => (
          <Input
            label="Telephone Number"
            placeholder="eg. +49 157 00000000"
            {...field}
          />
        )}
      />
    </div>
  );
};

export default PersonalInfo;
