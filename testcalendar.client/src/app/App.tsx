import { setDefaultOptions } from "date-fns";
import { ru } from "date-fns/locale";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { appInitAction } from "./store/actions";
import { useAppDispatch } from "./store/hooks";
import { UseTitle } from "./utils/Theme";

setDefaultOptions({
  locale: ru,
  weekStartsOn: 1,
});

const App = () => {
  const dispatcher = useAppDispatch();

  UseTitle();
  dispatcher(appInitAction());

  return <RouterProvider router={Router} />;
};

export default App;
