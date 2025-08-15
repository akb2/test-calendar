import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const Fallback = () => <div>Загрузка…</div>;
const App = () => <RouterProvider router={router} fallbackElement={<Fallback />} />;

export default App;