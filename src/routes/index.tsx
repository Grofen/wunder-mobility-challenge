import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as paths from "./paths";

import HomePage from "pages/home";
import Navbar from "components/shared/navbar";
import Registration from "components/registration";
import Success from "components/success";
import NotFound from "pages/not-found";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.homePath} element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path={paths.registerPath} element={<Registration />} />
      <Route path={paths.successPath} element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const RoutesTable = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default RoutesTable;
