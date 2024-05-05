import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

//  this is sample data for testing purpose ------------------------------------------------
const sampleCases = [
    {
        title: 'Case 1',
        description: 'This is the description of Case 1.',
    },
    {
        title: 'Case 2',
        description: 'This is the description of Case 2.',
    },
    {
        title: 'Case 3',
        description: 'This is the description of Case 3.',
    },
];

const createData = (id, title, description, payment) => {
    return { id, title, description, payment };
};

const rows = [
    createData('1', 'Case 1', 'Description for Case 1', '4'),
    createData('2', 'Case 2', 'Description for Case 2', '5'),
    createData('3', 'Case 3', 'Description for Case 3', '6'),
];

// --------------------------------------------------------------------------------------------------------------

const getAdmin = async () => {
    try {
        const url = 'http://localhost:3333/ifl_system/auth/admin/get-profile';
        const response = await axios.get(url, {
            headers: {
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzNzVhYTQ4YjY5MDE0NTE3NTRkZmEwIn0sImlhdCI6MTcxNDkwMzcxNn0.5EqopnKtC3qNB_vn47EqWcMw1rnrtMK7XZih0rn3J-4"
            }
        });

        if (!response.data) {
            throw new Error('Error fetching donor');
        }
        return response.data || {}; // Return an empty object if data is undefined
    } catch (error) {
        console.log(error);
        return {}; // Return an empty object on error
    }
}

const getRequestedCases = async ({ cases: sampleCases }) => {
    try {
        const url = 'http://localhost:3333/ifl_system/auth/admin/get-all-requested-cases';
        const response = await axios.get(url, {
            headers: {
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzNjdjZjNjMTc4OTQxY2NmOGE3MWUzIn0sImlhdCI6MTcxNDg0Njk2M30.G4ppfM-3KosodIaLhvTlJsbCDkP_4m4oejU21eQkMEg"
            }
        });
        if (!response.data) {
            throw new Error('Error fetching requested cases');
        }
        return response.data || [];

    } catch (error) {
        console.log(error);
        return {};
    }
}


function AdminDashboard({ case: caseItem }) {

    const { data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: getAdmin,
    });

    const { data: cases } = useQuery({
        queryKey: ['cases'],
        queryFn: getRequestedCases,
    });



    return (
        <ThemeProvider theme={createTheme()}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        backgroundColor: '#f0f0f0', // Light gray background color
                                    }}
                                >
                                    <Typography variant="h4" gutterBottom>
                                        Profile
                                    </Typography>
                                    {profile && (
                                        <>
                                            <Typography variant="body1" gutterBottom>
                                                Full Name: {profile.full_name}
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                Email: {profile.email}
                                            </Typography>
                                        </>
                                    )}
                                </Paper>
                            </Grid>

                            
                            
                        </Grid>
                        <Typography variant="body2" color="text.secondary" align="center">
                            <Link color="inherit" href="https://mui.com/">
                                Your Website
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default AdminDashboard;


