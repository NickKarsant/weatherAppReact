import React from 'react';
import cloudy from '../img/cloudy.png'
import rainy from '../img/rain.png'
import sunny from '../img/sunny.png'
import snowy from '../img/snow.png'
import {Card, Grid, CardContent, Typography  } from '@mui/material';


export const SingleDayCard = ({forecast, index}) => {
const weekdays = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
const tempFHigh = Math.round(forecast.apparentTemperatureMax)
const tempFLow = Math.round(forecast.apparentTemperatureMin)

let icon;
switch (forecast.icon) {
  case 'snowy':
    icon = snowy;
    break;
  case 'cloudy':
    icon = cloudy;
    break;
  case 'rain':
    icon = rainy;
    break;
  case 'sunny':
    icon = sunny;
    break;
    
  default:
    icon = cloudy
}


const date = new Date(forecast.time*1000);
const day = index === 0 ? 'Today': weekdays[date.getDay()]

  return (
    <Card key={forecast.time}>
      <CardContent>
        <Typography style={{backgroundColor:'blue', paddingLeft: 4, color: 'white'}} gutterBottom variant="h5" component="div">
          {index === 0 ? 'Today': `${weekdays[date.getDay()]}:`}
        </Typography>


        <Grid container alignItems='center' justifyContent='space-between'>

          <Grid item>
            <img src={icon}/>
          </Grid>    
          <Grid item>
          {`${tempFHigh}\u00b0F`} / {`${tempFLow}\u00b0F`}
          </Grid>    
        </Grid>   

        <Grid container>
          {forecast.summary}                
        </Grid>    
      </CardContent>
      
    </Card>
  );
}

