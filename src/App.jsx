import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./pages/WatchPage";
import { SearchPage } from "./components/SearchPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import { ThemeProvider } from "./components/theme-provider";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="youtube-theme">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
