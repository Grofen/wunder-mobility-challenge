import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

import * as paths from "routes/paths";

import Logo from "assets/logo.svg";
import Button from "../button";
import { ButtonVariant } from "types/buttons";
import { companyName } from "config/index";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 bg-white z-[99]">
        <nav
          className="flex items-center justify-between gap-x-6 p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to={paths.homePath} className="-m-1.5 p-1.5">
              <span className="sr-only">{companyName}</span>
              <Logo />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <Button
              href={paths.registerPath}
              variant={ButtonVariant.Primary}
              className="hidden lg:block"
            >
              Sign up
            </Button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
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
      </header>
      <Outlet />
    </>
  );
}
