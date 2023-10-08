import Input from "components/shared/input";
import { Controller, Path } from "react-hook-form";
import {
  RegistrationFormInput,
  RegistrationFormProps,
} from "types/registration";

const AddressInfo = <T extends RegistrationFormInput>({
  control,
}: RegistrationFormProps<T>): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mb-6">
        <Controller
          control={control}
          name={"address1" as Path<T>}
          render={({ field }) => (
            <Input
              label="Address 1"
              placeholder="eg. Pariser Platz"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={"address2" as Path<T>}
          render={({ field }) => (
            <Input label="Address 2" placeholder="" {...field} />
          )}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Controller
          control={control}
          name={"houseNumber" as Path<T>}
          render={({ field }) => (
            <Input label="House Number" placeholder="eg. 27" {...field} />
          )}
        />
        <Controller
          control={control}
          name={"zip" as Path<T>}
          render={({ field }) => (
            <Input label="Zip Code" placeholder="10117" {...field} />
          )}
        />
        <Controller
          control={control}
          name={"city" as Path<T>}
          render={({ field }) => (
            <Input label="City" placeholder="Berlin" {...field} />
          )}
        />
      </div>
    </>
  );
};

export default AddressInfo;
