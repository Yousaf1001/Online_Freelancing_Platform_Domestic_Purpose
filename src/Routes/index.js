import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import NavbarLayout from "../Layout/NavbarLayout";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import Dashboard from "../pages/Dashboard";
import PostProject from "../pages/PostProject";
import ManageProjects from "../pages/ManageProjects";
import ProjectDetails from "../pages/ProjectDetails";
import FreelancerDashboard from "../pages/FreeLancerDashboard";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* *****************************     HOME PAGE ROUTES      ***************************** */}

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage></SignupPage>} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* *****************************     DASHBOARD PAGE ROUTES      ***************************** */}

        <Route path="/dashboard" element={<Dashboard></Dashboard>} />


       
        {/* *****************************     Freelancer DASHBOARD PAGE ROUTES      ***************************** */}

        <Route path="/freelancerDashboard" element={<FreelancerDashboard></FreelancerDashboard>} />
            
        {/* *****************************     CLIENT  ROUTES      ***************************** */}

        <Route path="/postproject" element={<PostProject></PostProject>} />
        <Route
          path="/manageprojects"
          element={<ManageProjects></ManageProjects>}
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails></ProjectDetails>}
        />
        {/* *****************************     ERROR  ROUTES      ***************************** */}

        <Route
          path="*"
          element={
            <NavbarLayout>
              <Error />
            </NavbarLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;