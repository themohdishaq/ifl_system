import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const UserDetailsCard = ({ userDetails }) => {
  return (
    <Card variant="outlined" sx={{ 
      width: '100%', // Set width
      height: 'auto',
      fontWeight: '600',
      lineHeight: '15px',
      backgroundColor: 'transparent', // Set background color
      color: '#fff', // Set text color
    }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{userDetails.name}</Typography>
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}> {/* Add margin top */}
          {/* Column 1: Labels */}
          <Grid item xs={6} md={6}>
            <Typography><strong>Name:</strong></Typography>
            <Typography><strong>Father's Name:</strong></Typography>
            <Typography><strong>Contact Number:</strong></Typography>
            <Typography><strong>CNIC Number:</strong></Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography>{userDetails.name}</Typography>
            <Typography>{userDetails.fatherName}</Typography>
            <Typography>{userDetails.contactNumber}</Typography>
            <Typography>{userDetails.CNICNO}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserDetailsCard;
