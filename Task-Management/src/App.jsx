import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Components/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box className="navbar">
        <Navbar />
      </Box>
      <AllRoutes />
    </>
  );
}

export default App;
