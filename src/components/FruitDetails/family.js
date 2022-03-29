import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Family({item}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="body2">
        family
        </Typography>
        <Typography variant="h5" component="div">
       {item.family}
        </Typography>
      </CardContent>

    </Card>
  );
}
