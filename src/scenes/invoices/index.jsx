import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'fee',
      headerName: 'Fee',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>{`$${params.row.fee}`}</Typography>
      ),
    },
    { field: 'date', headerName: 'Date', flex: 1 },
    {
      field: 'pay',
      headerName: 'Payment',
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePayOnline(params.row)}
        >
          Pay Online
        </Button>
      ),
    },
  ];

  const handlePayOnline = (userData) => {
    navigate(`/students/${userData.id}`, { state: { userData } });
  };

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box mt={4} height="calc(100vh - 120px)" maxWidth="100%">
        <DataGrid
          autoHeight
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          disableSelectionOnClick
          disableColumnFilter
          disableColumnMenu
          density="compact"
        />
      </Box>
    </Box>
  );
};

export default Invoices;
