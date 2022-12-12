import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from './restaurant.action';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {  CardActionArea } from '@mui/material';

export default function Restaurants() {
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.Restaurant.restaurants.restaurants);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchRestaurant());  
    }, []);

    useEffect(() => {
        console.log(restaurants)
    }, [restaurants]);

       return (
        <div  style={{backgroundImage: `url('https://static01.nyt.com/images/2017/12/20/dining/20sell1skybox/merlin_131178758_51431cca-996a-4543-90ea-7a866dbccdfb-superJumbo.jpg')`,'background-position': 'center center'}}className='app-container1'>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {restaurants?.map(rest =>
            <Grid item xs={5}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={rest.store_image}                    
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {rest.store_name}
                     
                    </Typography>
                    {/* <Typography variant="body3" color="text.secondary">
                     Location:{rest.store_state}
                    </Typography> */}
                    <Typography variant="body2" color="text.secondary">Contact:{rest.store_phone}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href='/menu'>
                    View Menu
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
    );
}

