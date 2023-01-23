import "./index.scss";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import pages from "./pages";
import components from "./components";

const
  SignedOutAppLayout = () => {
    return (
      <>
        <components.NavbarSignedOut />
        <Outlet />
      </>
    );
  },

  SignedInAppLayout = () => {
    return (
      <>
        <components.NavbarSignedIn />
        <Outlet />
      </>
    );
  },

  router = createBrowserRouter([
    {
      path: "/",
      element: <SignedOutAppLayout />,
      children: [
        {
          path: "/",
          element: < pages.Landing />
        }
      ]
    },
    {
      path: "/",
      element: <SignedInAppLayout />,
      children: [
        {
          path: "/files",
          element: <pages.Files />
        }
      ]
    }
  ]);


function App() {
  return (
    <section className="container">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;;