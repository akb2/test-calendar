import { Router } from "#app/Router";
import { UseTitle } from "#utils/Theme";
import { RouterProvider } from "react-router-dom";

const App = () => {
  UseTitle();

  return <RouterProvider router={Router} />;
};

export default App;
