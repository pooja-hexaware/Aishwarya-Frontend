import React from 'react'
import Avatar from '@mui/material/Avatar';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddtoCart from '../components/toppings/addtocart';
// import '../components/Home.css'
// import AddtoCart from './AddtoCart';


class Container extends React.Component {
    constructor(props) {
        super();
        this.state = {
            menuOpen: false
        }
    }


    header = () => {
        return (
            
            <div>
                <Box sx={{ flexGrow: 2 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Avatar
                                src="https://www.bing.com/th?id=OIP.4jDMm5Jg4pu6mPWR56tgTgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                                sx={{ width: 56, height: 56 }}
                            >

                            </Avatar>
                            <Typography
                                variant="h5"
                                noWrap
                                component="div"

                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                WIWI-Capstone

                            </Typography>
                     
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                            <AddtoCart/>

                            </Box>

                        </Toolbar>
                    </AppBar>

                </Box>

            </div>
        )
    }

body=()=>{
    return(
        <div style={{backgroundImage: `url('https://en.free-wallpapers.su/data/media/2319/big/fd0242.jpg')`, 'background-position': 'center center'}}></div>
    )
}

    footer = () => {
        return (
            <div style={{ backgroundColor: "#4287f5" }}>
                <Typography align="center" style={{ fontSize: 20 }}>
                    © 2022 Hexaware Technologies Limited. All rights reserved
                </Typography>
            </div>
        )
    }



    render() {
        return (
            <div>

                {this.header()}
               
                <div style={{ height: "79vh" }}>
                    {this.props.children}
                    {this.body()}
                </div>

            </div>
        )
    }
}
export default Container;