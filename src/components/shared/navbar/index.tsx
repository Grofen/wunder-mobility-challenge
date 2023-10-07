import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

import * as paths from "routes/paths";

import Logo from "assets/logo.svg";
import Button from "../button";
import { ButtonVariant } from "types/buttons";
import { companyName } from "config/index";
import NavMobile from "./mobile-nav";

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
        <NavMobile
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
      <Outlet />
    </>
  );
}
