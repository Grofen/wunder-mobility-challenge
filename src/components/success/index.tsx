import { CheckIcon } from "@heroicons/react/24/outline";

const Success = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-full transform text-left text-base transition mx-8 px-8 md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl lg:h-80 bg-white px-4 pb-8 pt-14 shadow-2xl rounded-md">
        <h1 className="flex items-center justify-center text-2xl font-bold mb-5 md:text-4xl">
          Your Registration is Successful!
          <CheckIcon className="h-8 w-8 ml-2 text-green-500 shrink-0 ml-3" />
        </h1>
        <p className="text-gray-600 text-md md:text-lg">
          Thank you for registering with us. You can now login to your account
          and start using our services.
        </p>
      </div>
    </div>
  );
};

export default Success;
