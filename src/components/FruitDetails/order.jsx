import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Order({item}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="body2">
          order
        </Typography>
        <Typography variant="h5" component="div">
       {item.order}
        </Typography>
      </CardContent>

    </Card>
  );
}
