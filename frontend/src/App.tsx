import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
