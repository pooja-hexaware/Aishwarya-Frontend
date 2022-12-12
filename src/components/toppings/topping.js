// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import { InputLabel } from "@mui/material";

// import { blue } from '@mui/material/colors';

// import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTopping } from './topping.action';
// import { AppBar,  Checkbox, Chip, Menu, MenuItem, MenuList, Tab, TextField, Typography } from "@mui/material";
// // import { Box } from "@mui/system";
// // import {Paper} from "@mui/material";
// import { Dialog } from "@mui/material";
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { Select } from "@mui/material";
// import Modal from "@mui/material/Modal";
// //import List from '@mui/material/List';
// import { FormControl } from "@mui/material";
// import { InputLabel } from "@mui/material";
// // import ListItem from '@mui/material/ListItem';
// // import ListItemAvatar from '@mui/material/ListItemAvatar';
// //import {useState} from 'react';
// //import * as React from 'react';
// //import {useEffect} from 'react';

// function SimpleDialog(props) {
//     const { onClose, open } = props;
//     const [selectedValue, setSelectedValue] = useState([])
//     const dispatch = useDispatch();
//     const toppings = useSelector((state) => state.Topping.toppings.toppings);
//     const [topping,setToppings]=useState([])

  
//     useEffect(() => {
//       dispatch(fetchTopping());
//     }, []);
  
//     useEffect(() => {
//         console.log(toppings)
//       }, [toppings]);
    
//     const handleClose = () => {
//         onClose(selectedValue);
//     };
//     const handleclick1=()=>{
//         setToppings(selectedValue);
//     }
//     console.log("d",topping);

//     // const handleListItemClick = (value) => {
//     //     setSelectedValue(value);

//     // };
//     console.log("aa",selectedValue);
//     const handleChange = (event) => {
//         event.preventDefault();
//         const {
//           target: { value },
//         } = event;
//         setSelectedValue(
//           typeof value === 'string' ? value.split(',') : value,
//         );
//       };

//     return (
//         // <Dialog onClose={handleClose} open={open}>
//         //     <List sx={{ pt: 0 }}>
//         //         {toppings?.map((res) => (
//         //             <ListItem button  key={res}>
//         //                 <ListItemAvatar>
//         //                     <Avatar src={res.top_image} sx={{ bgcolor: blue[100], color: blue[600] }}>
                               
//         //                     </Avatar>
//         //                 </ListItemAvatar>
//         //                 <ListItemText primary={res.name} secondary={res.price}/>
//         //                 <Checkbox onClick={() => handleListItemClick(res)}/>

//         //             </ListItem>
                    
//         //         ))}
//         //     </List>
//         //     <Button variant="contained" color="success" onClick={()=>handleclick1}>Done</Button>
//         // </Dialog>

//         <Dialog onClose={handleClose} open={open}>
//       <List sx={{ pt: 0 }}>
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//           <InputLabel>Select the Toppings</InputLabel>
//           <Select multiple value={selectedValue} onChange={handleChange} input={<OutlinedInput label="Tag" />}
//           >
//             {toppings?.map((m, i) => (
//               <MenuItem
//                 key={i} value={{ "name": m.name, "price": parseFloat(m.price) }}
//               >
                
//                 <ListItemText primary={m.name} /><ListItemText primary={m.price} /></MenuItem>))}
//           </Select>
//         </FormControl>
//         <Tab /><Button variant="contained" color="success" onClick={handleClose}>Done</Button>
//       </List></Dialog>
//     );
// }

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

// export default function Toppingcard(toppings) {
//     const [open, setOpen] = React.useState(false);
//     const [selectedValue, setSelectedValue] = React.useState(toppings[1]);
    
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value) => {
//         setOpen(false);
//         setSelectedValue(value);
//     };

//     return (
//         <div>
//            <br />
//             <Button variant="contained" onClick={handleClickOpen} startIcon={<ControlPointIcon />}>
//                 toppings
//             </Button>
//             <SimpleDialog
//                 selectedValue={selectedValue}
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     );
// }

