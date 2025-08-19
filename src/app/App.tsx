import { Router } from "#app/Router";
import { UseTitle } from "#utils/Theme";
import { setDefaultOptions } from "date-fns";
import { ru } from "date-fns/locale";
import { RouterProvider } from "react-router-dom";

setDefaultOptions({
  locale: ru,
  weekStartsOn: 1,
});

const App = () => {
  UseTitle();

  return <RouterProvider router={Router} />;
};

export default App;
