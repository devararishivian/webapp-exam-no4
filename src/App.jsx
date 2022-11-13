import { useState } from "react";
import AppNavbar from "./components/Navbar";
import AppHero from "./components/Hero";
import AppProduct from "./components/Product";

function App() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <AppHero></AppHero>
      <AppProduct></AppProduct>
    </>
  );
}

export default App;
