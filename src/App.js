import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { SingleDayCard } from './components'
import {Container, Button, Typography, Grid, Stack, TextField } from '@mui/material';


function App() {
  const [locationData, setLocationData] = useState({});
  const [forecast, setForecast] = useState([]);
  const [zipcode, setZipcode] = useState();
  const [threeDay, setThreeDay] = useState();


  const validateZipcode = (input) => {
    // ideally validate vs database of zipcodes
    if (input.replace(/\s/g, "").length === 5 || input.replace(/\s/g, "").length === 9){
      setZipcode(input)
    }
  }

  const getForecast = (n=3) => {
    const t = new Date();
      const day = ('0' + t.getDate()).slice(-2);
      const month = ('0' + (t.getMonth() + 1)).slice(-2);
      const year = t.getFullYear();
      
      const date = `${month}/${day}/${year}`;
      
      axios(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${locationData.latitude}&longitude=${locationData.longitude}&date=${date}`
      )
      .then((res) => {
        setForecast(res?.data?.daily?.data.splice(0,n))
      })
      .catch((err) => {
        console.log(err);
      });
  }

    useEffect(() => {
      // getForecast(5) will return a 5 day forecast, default is 3
      getForecast()
    }, [locationData])

    useEffect(() => {
      setThreeDay(forecast?.map((day, i) =>  <SingleDayCard index={i} key={day.sunriseTime} forecast={day}/>))
      
    }, [locationData])

    // INPUT addition
    const searchZipcode = (e, zipcode) => {
      e.preventDefault()
      axios(
        `https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=${zipcode}`
        )
        .then((res) => {
          setLocationData(res?.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const input = (
      <form onSubmit={(e) => searchZipcode(e, zipcode)}>
      <Grid container alignItems='center' >
        <Grid item >
          <TextField id='input' placeholder='Zip Code' onChange={(e) => validateZipcode(e.target.value)} variant='outlined'/>
        </Grid>
        <Grid item >
          <Button variant='contained' style={{margin: 5}}  type='submit'>Search</Button>
        </Grid>
      </Grid>
      </form>
    )

    const forecastDisplay = locationData?.city && (
      <>
      <Typography component='h5' variant='h5'> {`Weather Forecast for ${locationData?.city}`}</Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}>
        {threeDay}
      </Stack>
      </>
    )


    return (
    <Container maxWidth='md' style={{boxShadow: '3', height: 'fit-content'}} className="App">

    <Typography component='h5' variant='h5'>Search Weather by Zip Code</Typography>
      {input}    
      {forecastDisplay}
    </Container>
  );
}

export default App;
