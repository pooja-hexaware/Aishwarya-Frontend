import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { fetchMenu } from './menu.action';
import { fetchTopping } from '../toppings/topping.action';
import { Dialog } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { InputLabel ,ListItem} from "@mui/material";
import {MenuItem, MenuList, Tab ,ListItemAvatar,IconButton,Badge,SwipeableDrawer} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addCartItem } from '../store/cart.slice';
export default function MenuCard() {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.Menu.menus.menus);
  const [num,setNum]=useState(0);
  const [quantity,setQuantity]=useState('');
  const [cart,setCart]=useState([]);
  const [selectedValue, setSelectedValue] = useState([])
  const toppings = useSelector((state) => state.Topping.toppings.toppings);
  const [open, setOpen] = React.useState(false);
 
  useEffect(() => {
    dispatch(fetchTopping());
  }, []);

  useEffect(() => {
      console.log(toppings)
    }, [toppings]);
  
  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  useEffect(() => {
    console.log(menus)
  }, [menus]);

  const AddCart = (data) => {
    setCart((oldcart) => {
      return [...oldcart, data]
    })
    dispatch(addCartItem(data));
  }
  
  const handleOrder = (Name, Itemprice, toppings) => {

    var price = 0;
    toppings.map((item) => {
      price = price + item.price;
    })

    price = price + Itemprice;
    console.log(price + Itemprice);
    console.log(quantity);
    setNum((n) => ++n);

    var data = {
      "name": Name,
      "price": price,
      "quantity": quantity
    };
    AddCart(data);
  }
  console.log("asdf",cart);

  const QuantityHandler=(event)=>{
    setQuantity(event.target.value);
  }

  const handleChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setSelectedValue(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  //cart
  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const handleOpen=()=>{
    setOpen(true);
  }
   
  const handleCartClose=()=>{
    setOpen(false);
  }

  const handleOrderCart=()=>{

  }
  

  return (
  <>
      
    <div  style={{backgroundImage: `url('https://static01.nyt.com/images/2017/12/20/dining/20sell1skybox/merlin_131178758_51431cca-996a-4543-90ea-7a866dbccdfb-superJumbo.jpg')`,'background-position': 'center center'}} className='app-container1'>
   
        <div className='paper'>

          <Card sx={{ display: 'flex', width: '80%' }} >

            <CardContent sx={{ flex: '1 0 auto' }}>

              <Typography component="div" variant="h5">

                Good Food,Great Time

              </Typography>

              <Typography variant="body2" color="text.secondary" >

                our chef's at wiwi make delicious food selections every week-you pick,we cook and deliver

              </Typography>

            </CardContent>

          </Card>

      </div>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        {menus?.map(data =>
          <Paper
            sx={{
              p: 4,
              margin: 'auto',
              maxWidth: 700,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ width: '100%' }}>



                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {data.item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                    {data.item_description}
                  </Typography>
                </CardContent>
                <Typography>&nbsp;&nbsp;${data.base_price}</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Button style={{width:'100px',backgroundColor:"green",color:"white"}} onClick={handleOpen}>Toppings</Button>
                  <Dialog onClose={handleClose} open={open}>
                    <List sx={{ pt: 0 }}>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} style={{width:'300px'}}>
                        <InputLabel style={{width:'500px'}}>Select the Toppings</InputLabel>
                        <Select multiple value={selectedValue} onChange={handleChange} input={<OutlinedInput label="Tag" />}
                        >
                          {toppings?.map((m, i) => (
                            <MenuItem
                              key={i} value={{ "name": m.name, "price": parseFloat(m.price) }}
                            >
                              <ListItemAvatar>
                                <Avatar  src={m.top_image}></Avatar>
                              </ListItemAvatar>
                              <ListItemText primary={m.name} /><ListItemText primary={m.price} /></MenuItem>))}
                        </Select>
                      </FormControl>
                      <Tab /><Button   variant="contained" color="success" onClick={handleClose}style={{position: 'relative', top: '15px'}}>Done</Button>
                    </List></Dialog>
                    &nbsp;&nbsp;&nbsp;<Button style={{width:'100px',backgroundColor:"green",color:"white"}} onClick={() => handleOrder(data.item, data.base_price, selectedValue)}  >Add</Button>
                    &nbsp;&nbsp;&nbsp;<TextField type="number" size="small" sx={{ width: 100 }} onChange={QuantityHandler} />
                </Box>
              </Box>
              <CardContent>
                </CardContent>


              <CardMedia
                component="img"
                sx={{ width: 150, height: 200 }}
                image={data.item_image}
                alt="Live from space album cover" />
            </Card>
          </Paper>

        )}

      </Grid>
      <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              
              onClick={toggleDrawer(anchor, true)}
            >
                <Typography>Your Cart</Typography><br></br><br/>
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
              
            </IconButton>
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <List sx={{ pt: 0 }}>
              {cart.map((res) => (
                <ListItem button key={res}>
                  <ListItemText primary={res.name} />
                  <ListItemText primary={res.price} secondary={res.quantity} />
                </ListItem>
              ))}
              <Button onClick={handleCartClose} color="error">Close</Button>
              {/* <Button onClick={handleOrderCart} color="success">Order</Button> */}
            </List>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    </div>
    
  </>



  );

}