import { GlobalStyles } from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bookmarked from "./pages/Bookmarked";
// import TvSeries from "./pages/TvSeries ";
import AppLayout from "./ui/AppLayout";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  // useLocalStorageState(
  //   movies.map((movie) => ({
  //     ...movie,
  //     id: crypto.randomUUID().slice(1, 8),
  //   })),
  //   "movies"
  // );
  // localStorage.setItem(, JSON.stringify(movies));

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
