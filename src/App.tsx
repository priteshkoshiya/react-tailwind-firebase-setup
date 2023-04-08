import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./Route";
// import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
