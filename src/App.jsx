import { GlobalStyles } from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

import Bookmarked from "./pages/Bookmarked";
import AppLayout from "./ui/AppLayout";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Tooltip } from "react-tooltip";
import Settings from "./pages/Settings";
import SignUp from "./pages/Signup";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/bookmarked",
        element: <Bookmarked />,
      },
      {
        path: "/tv-series",
        element: <TvSeries />,
      },
      {
        path: "/settings/:username",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Tooltip id="my-tooltip" />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "var(--color-semi-darkBlue)",
              color: "var(--color-white)",
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: "var(--color-white)",
              color: "var(--color-red-50)",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </>
  );
}

export default App;
