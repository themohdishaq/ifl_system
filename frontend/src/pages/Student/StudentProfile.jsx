import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, Typography, Link, Grid, Paper } from '@mui/material';

export default function StudentProfile() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const saveProfile = () => {
        const editBtn = document.getElementById('editDiv');
        const saveDiv = document.getElementById('saveDiv');
        editBtn.classList.remove('hidden');
        saveDiv.classList.add('hidden');
        toast.success('Profile Updated Successfully!', {});
    };
    const cancelProfile = () => {
        const editBtn = document.getElementById('editDiv');
        const saveDiv = document.getElementById('saveDiv');
        editBtn.classList.remove('hidden');
        saveDiv.classList.add('hidden');
    };
    const editProfile = () => {
        const editBtn = document.getElementById('editDiv');
        const saveDiv = document.getElementById('saveDiv');
        editBtn.classList.add('hidden');
        saveDiv.classList.remove('hidden');
    };

    return (
        <Grid container spacing={3} className="p-5 md:p-8">
            <Grid item xs={12}>
                <Typography variant="h4">User Profile</Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href="/">Home </Link>
                <Typography variant="body">/ </Typography>
                <Link href="/messaging"> User Profile</Link>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Paper className="flex flex-col justify-center items-center p-1 md:p-5">
                    <div className="m-5 rounded-full ">
                        <input
                            type="file"
                            accept="image/*"
                            id="imageInput"
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="imageInput">
                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} alt="" width='150px' height='150px' />
                        </label>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Button
                            variant="contained"
                            component="span"
                            onClick={handleImageChange}
                            sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' }, mt: 2 }}
                        >
                            Upload
                        </Button>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Paper className="rounded-lg">

                            <Grid container xs={12} lg={12}>
                                <Grid item xs={12} lg={6}>
                                    <form className="w-full flex flex-col justify-around px-5 lg:p-5">
                                        <TextField label="First Name" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="Phone Number" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="Email" type="email" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="Gender" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="Religion" variant="outlined" size="small" sx={{ mb: 2 }} />
                                    </form>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <form className="w-full flex flex-col justify-around px-5 lg:p-5">

                                        <TextField label="Last Name" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="CNIC" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="Date of Birth" type="date" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="Joining Date" type="date" variant="outlined" size="small" sx={{ mb: 2 }} />
                                        <TextField label="Occupation" variant="outlined" size="small" sx={{ mb: 2 }} />
                                    </form>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} lg={12}>
                                <div className='w-full flex justify-center'>
                                    <div className="mb-3 hidden" id='saveDiv'>
                                        <Button
                                            variant="contained"
                                            onClick={saveProfile}
                                            sx={{ bgcolor: '#FFD700', '&:hover': { bgcolor: '#FFC300' }, mr: 2 }}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={cancelProfile}
                                            sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' } }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                    <div className="mb-3" id='editDiv'>
                                        <Button
                                            variant="contained"
                                            onClick={editProfile}
                                            sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' } }}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}