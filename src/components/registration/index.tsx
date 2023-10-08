import { useForm } from "react-hook-form";
import RegistrationForm from "./form";
import { registrationDefaultFormValues } from "utils/registration";
import { RegistrationFormInput } from "types/registration";
import useStoredState from "hooks/use-stored-state";
import api from "providers/api/endpoints";
import { useNavigate } from "react-router-dom";
import * as paths from "routes/paths";

const Registration = (): JSX.Element => {
  const navigate = useNavigate();
  const [registrationInfo, setRegistrationInfo] = useStoredState(
    "registration-info",
    registrationDefaultFormValues
  );

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: registrationInfo,
    mode: "onSubmit",
  });

  const handleValidSubmit = async (data: RegistrationFormInput) => {
    const responseData = await api.createRegistrationPayment(data);

    if (responseData) {
      reset();
      navigate(paths.successPath);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <RegistrationForm
        control={control}
        errors={errors}
        getValues={getValues}
        handleFormSubmit={handleSubmit(handleValidSubmit)}
        setValue={setValue}
        localRegistrationInfo={registrationInfo}
        setLocalRegistrationInfo={setRegistrationInfo}
      />
    </div>
  );
};

export default Registration;
