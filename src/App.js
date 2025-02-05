import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import IndexPage from "./pages/IndexPage";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <>
      <BrowserRouter>
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" />
        <Routes>
          <Route exact path="/" element={<HomeFour />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/service-details" element={<ServiceDetails />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/project-details" element={<ProjectDetails />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog-details" element={<BlogDetails />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/team-details" element={<TeamDetails />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/web-development"
            element={<LandingPage page={"web"} />}
          />
          <Route
            exact
            path="/app-development"
            element={<LandingPage page={"app"} />}
          />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
