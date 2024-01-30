"use client"
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { NavBar } from "@/components/Main/NavBar";
import { router } from "./routes";

export default function App() {
  return (
    <body>
      <React.StrictMode>
        <NavBar />
        <div style={{
          minWidth: "100%",
          minHeight: "100%",
        }}>
          <RouterProvider router={router} />
        </div>
      </React.StrictMode>
    </body>
  )
}