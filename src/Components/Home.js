import React, { useState } from 'react';
import { AppBar,Paper, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Toolbar, Typography, styled, InputBase, Badge, Stack, Avatar, TextField} from '@mui/material';
import WebhookIcon from '@mui/icons-material/Webhook';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MailIcon from '@mui/icons-material/Mail';
import "./Home.css"
import { Main } from './Project/Main';
import Notifications from '@mui/icons-material/Notifications';

const StyleToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent: 'space-between',
  backgroundColor: "blue",
 
 
})

const StyleGrid = styled(Grid)({
  display:"flex",
  flexDirection:"row"
  
})

const ButtonHub = styled(Button)({
  backgroundColor:"blue", 
  color:"white",
  justifyContent:"center",
  borderRadius:"none",
  margin:"20px",
  "&:hover":{
    backgroundColor:"orange"
},

})

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  
  color: theme.palette.text.secondary,
}));


const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"5px 10px",
  borderRadius:"5px",
  alignItems:"center",
  padding:" 5px 10px",
  width:"50%"

}))

const Icon = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:'flex'
  }
  

}))

const Userbox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }
  

}))

const Inputfield = styled("div")(({theme})=>({
  display:"flex",
  flexDirection:"column",
  border:"0.2px solid grey",
  padding:"10px 20px",
  alignItems:"center",
  gap:"20px",



}))



export function Home(){


 

  const [open, setOpen] = useState(false)

  return(
    <>
    <AppBar position='sticky' >
      <StyleToolbar>
        <Typography variant='h4' sx={{display:{xs:'none', md:'block'}}}>MernStack</Typography>
        <WebhookIcon sx={{display:{xs:'block', md:'none'}}}/>
        <Search>
          <InputBase placeholder='Search...'   sx={{width:"100%"}}/>
        </Search>





        <Icon >
          <Badge  badgeContent={4} color="primary">
            <MailIcon/>
          </Badge>
          <Badge  badgeContent={4} color="primary">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:"30px", height:"30px"}} src='https://images.pexels.com/photos/17785487/pexels-photo-17785487/free-photo-of-sunset-in-porto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
        </Icon>

        <Userbox  onClick={()=>setOpen(true)}>
          
          <Avatar sx={{width:"30px", height:"30px"}} src='https://images.pexels.com/photos/17785487/pexels-photo-17785487/free-photo-of-sunset-in-porto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
          <Typography>Arjun</Typography>
        </Userbox>



        
        

        
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e=>setOpen(false)}
        open={open}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
       
        <MenuItem>Account</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyleToolbar>
    </AppBar>


    <Main/>

   












    
    <Typography style={{textAlign:"center", fontSize:"4vw", padding:"10px 0"}}> My Work </Typography>
    <Box sx={{ flexGrow: 1, width:"80vw", margin:"20px auto" }}>
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>

            <CardMedia
            sx={{ height: 140 }}
            image="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
            />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Blog Application
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">Live demo</Button>
          <Button size="small">view code</Button>
          </CardActions>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box sx={{  background:"black", height:"20vh"}}>
      <Typography sx={{textAlign:"center", color:"white", padding:"60px"}}>Copyright@2023 MernStack</Typography>

    </Box>

    






    



        
     





    
    
    
    </>
  )
}

