import { setDefaultOptions } from "date-fns";
import { ru } from "date-fns/locale";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { UseTitle } from "./utils/Theme";

setDefaultOptions({
  locale: ru,
  weekStartsOn: 1,
});

const App = () => {
  UseTitle();

  return <RouterProvider router={Router} />;
};

export default App;
