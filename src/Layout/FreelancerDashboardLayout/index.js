import React from "react";
import FreelancerDashboardNavbar from "../../components/FreelancerDashboardNavbar";
const FreelancerDashboardNavbarLayout = ({ children }) => {
  return (
    <>
      <FreelancerDashboardNavbar></FreelancerDashboardNavbar>
      {children}
    </>
  );
};

export default FreelancerDashboardNavbarLayout;
