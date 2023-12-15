import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import {
  dashboardDescription,
  dashboardMainHeading,
} from "../../../Utils/constants";
import FreelancerDashboardCard from "../FreelancerDashboardCard";

const FreelancerDashboardMain = () => {
  const freelancerData = {
    balance: 5000, // replace with actual balance
    actualProjects: 8, // replace with actual number
    totalReviews: 123, // replace with actual number
    completedProjects: 45, // replace with actual number
  };

  return (
    <Box sx={{ p: { xs: "3rem 2rem", md: "3rem 4rem" } }}>
      <Typography sx={{ textAlign: "center" }} variant="h3">
        {dashboardMainHeading}
      </Typography>
      <Typography variant="p" sx={{ fontSize: "1.5rem" }}>
        {dashboardDescription}
      </Typography>
      <Grid container spacing={4} mt={4}>
        {/* Freelancer Cards */}
        <FreelancerDashboardCard
          Title={"Balance"}
          Value={freelancerData?.balance}
        ></FreelancerDashboardCard>

        <FreelancerDashboardCard
          Title={"Total Reviews"}
          Value={freelancerData?.totalReviews}
        ></FreelancerDashboardCard>
        <FreelancerDashboardCard
          Title={"Active Projects"}
          Value={freelancerData?.actualProjects}
        ></FreelancerDashboardCard>

        <FreelancerDashboardCard
          Title={"Total Projects "}
          Value={freelancerData?.completedProjects}
        ></FreelancerDashboardCard>
      </Grid>
    </Box>
  );
};

export default FreelancerDashboardMain;
