import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';



export default function ViewCase() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
            <Card style={{ minWidth: 300, maxWidth: 1000 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Title:
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Description:
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Student Name:
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Student Email:
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Student Phone Number:
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Amount Raised:
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Amount Needed:
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
