import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function NutritionCard({item}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          Nutrition Details
        </Typography>
        <br/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5" >
          Carbohydrate: <Typography sx={{ mb: 1.2 }}>{item.nutritions.carbohydrates}</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
          Protein: <Typography sx={{ mb: 1.2 }}>{item.nutritions.protein}</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
          Fats: <Typography sx={{ mb: 1.2 }}>{item.nutritions.fat}</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
          Calories: <Typography sx={{ mb: 1.2 }}>{item.nutritions.calories}</Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
          Sugar: <Typography sx={{ mb: 1.2 }}>{item.nutritions.sugar}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
