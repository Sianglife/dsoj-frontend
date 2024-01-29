
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { NavBar } from "@/components/Main/NavBar";
import { router } from "./routes";



export function App() {
  return (
    <body>
      <React.StrictMode>
        <NavBar />
        <RouterProvider router={router} />
      </React.StrictMode>
    </body>
  )
}