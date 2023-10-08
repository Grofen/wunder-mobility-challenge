import Registration from "components/registration";
import Page from "components/shared/page";

const RegistrationPage = (): JSX.Element => {
  return (
    <Page hasPadding contentClassName="pt-8">
      <Registration />
    </Page>
  );
};

export default RegistrationPage;
