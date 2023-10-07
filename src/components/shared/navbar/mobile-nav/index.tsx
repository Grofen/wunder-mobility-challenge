import { ButtonVariant } from "types/buttons";
import { companyName } from "config/index";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import * as paths from "routes/paths";

import Button from "components/shared/button";
import Logo from "assets/logo.svg";

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (mobileMenuOpen: boolean) => void;
};

const NavMobile = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: Props): JSX.Element => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to={paths.homePath} className="-m-1.5 p-1.5">
            <span className="sr-only">{companyName}</span>
            <Logo />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6">
          <Button href={paths.registerPath} variant={ButtonVariant.Primary}>
            Sign up
          </Button>
          <p className="mt-6 text-center text-sm font-medium text-gray-500">
            This app is a solution for the Wunder Mobility frontend coding
            challenge.
          </p>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NavMobile;
