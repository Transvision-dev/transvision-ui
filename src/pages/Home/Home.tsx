import React from "react";
import AppNavbar from "../../components/appNavbar/appNavbar";
import App from "../../App";
import AppHero from "../../components/AppHero/AppHero";

const Home: React.FC = () => {
  return (
    <>
        <AppNavbar/>
        <AppHero/>
    </>
  );
}

export default Home;