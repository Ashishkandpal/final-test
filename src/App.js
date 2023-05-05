import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  { path: "", element: <Login /> },
  { path: "profile", element: <Profile /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
