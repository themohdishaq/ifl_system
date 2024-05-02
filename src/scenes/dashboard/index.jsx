import React from "react";
import { Box, Typography, Grid, Avatar, Card, CardContent,useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../theme";
import UserDetailsCard from "../../components/UserDetailsCard";
import Header from "../../components/Header";
import user from '../../assets/user.jpg'
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userDetails = {
    name: "MUHAMMAD ISHAQ",
    fatherName: "HASSAN",
    contactNumber: "+1234567890",
    CNICNO: "72921-2423423-9", // Assuming you have contact number in your data
    imageUrl: "path/to/user/image.jpg" // Replace with actual image URL
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Header title={userDetails.name} subtitle="Welcome to your IFL SYSTEM" />

      {/* USER DETAILS */}
      <Grid container spacing={2}>
      {/* User image */}
      <Grid item xs={12} md={2.5} display="flex" justifyContent="center" alignItems="center">
        <Avatar alt="User" src={user} sx={{ width: 200, height: 200 }} />
      </Grid>
      {/* User details */}
      <Grid item xs={12} md={8} display="flex" justifyContent="center" alignItems="center">
        <UserDetailsCard userDetails={userDetails} />
      </Grid>
    </Grid>

      {/* RECENT TRANSACTIONS */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box overflow="auto">
            {/* Recent Transactions */}
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
            </Grid>
    </Box>
  );
};

export default Dashboard;
