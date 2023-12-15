import React from "react";
import MainBody from "../../components/MainBody";
import NavbarLayout from "../../Layout/NavbarLayout";
import Carousal from "../../components/HomeComponents/Carousal";
import Categories from "../../components/HomeComponents/Categories";
import Footer from "../../components/HomeComponents/Footer";
const Home = () => {
  return (
    <NavbarLayout>
      <MainBody></MainBody>
      <Carousal></Carousal>
      <Categories></Categories>

      <Footer></Footer>
    </NavbarLayout>
  );
};

export default Home;
