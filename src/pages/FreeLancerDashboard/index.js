import React from "react";
import FreelancerDashboardNavbarLayout from "../../Layout/FreelancerDashboardLayout";
import FreelancerDashboardMain from "../../components/FreelancerDashboardComponent/FreelancerDashboardMain";

const FreelancerDashboard = () => {
  return (
    <FreelancerDashboardNavbarLayout>
      <FreelancerDashboardMain></FreelancerDashboardMain>
    </FreelancerDashboardNavbarLayout>
  );
};

export default FreelancerDashboard;
