import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

const PaymentWindow = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  const handlePayBill = () => {
    // Logic for handling payment
    alert('Payment successful!');
  };

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <Box mt={4} mx="auto" maxWidth={600}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h4" align="center" mb={3}>User Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography><strong>Name:</strong> {userData.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography><strong>Email:</strong> {userData.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography><strong>Phone Number:</strong> {userData.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography><strong>Fee:</strong> ${userData.fee}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography><strong>Date:</strong> {userData.date}</Typography>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <Button variant="contained" color="primary" onClick={handlePayBill} fullWidth>Pay Bill</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PaymentWindow;
