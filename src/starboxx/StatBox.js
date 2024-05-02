import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatBox = ({ title, value, children }) => {
  return (
    <Card variant="outlined" sx={{ width: '100%', height: '100%' }}> {/* Set width and height */}
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="h6">{value}</Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default StatBox;
