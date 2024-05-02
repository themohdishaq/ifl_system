import React, { useState } from 'react';
import { Box, Typography, Paper, Divider, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the transaction paper
const TransactionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Transaction = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, month: 'January', amount: 500, type: 'donation' },
    { id: 2, month: 'February', amount: 200, type: 'bill' },
    { id: 3, month: 'March', amount: 1000, type: 'donation' },
    { id: 4, month: 'April', amount: 300, type: 'bill' },
  ]);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Transaction History
      </Typography>
      {transactions.map((transaction) => (
        <TransactionPaper key={transaction.id} elevation={3} variant="outlined">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">{transaction.month}</Typography>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {transaction.type === 'donation' ? 'Donation Amount:' : 'Bill Paid:'} ${transaction.amount}
              </Typography>
            </Grid>
          </Grid>
        </TransactionPaper>
      ))}
    </Box>
  );
};

export default Transaction;
