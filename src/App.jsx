import Home from "./page/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import OurPromise from "./page/OurPromise.jsx";

function App() {

    const router=createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/promise",
            element: <OurPromise />
        }
    ])

  return (
    <div className="w-full bg-a">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
