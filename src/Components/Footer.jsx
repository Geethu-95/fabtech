import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import name from '../Images/name.jpg'

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{backgroundColor:"#28282B",}} sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <Grid container style={{marginTop:'20px'}}>
              <Grid item xs={12} lg={3}>

              <Grid item xs={12} align="left">
                    {/* <Typography align="left">FABRO TECHNICS</Typography><br/> */}
                    <img src={name} height="50px" width="300px" />
                </Grid>

                <Grid item xs={12}  align="left">
                <Typography >No. 11, St.Albans School compound, </Typography>
                <Typography>Abbigere Ind. Road, Lakshmipura cross, </Typography>
                <Typography>Lakshmipura, Bengaluru - 560 090.</Typography>
                </Grid>
              </Grid>
              <br/>
              <Grid item xs={12} lg={3} align="left" >
              <Grid item xs={12} >
                  <Typography >PRODUCTS</Typography>
                  
                  
                  
                </Grid>

                <Grid item xs={12} >
                <Typography><Link> Lorem ipsum</Link></Typography>
                <Typography> <Link>Lorem ipsum</Link></Typography>
                <Typography> <Link>Lorem ipsum</Link></Typography>
                  {/* <Typography>Lorem ipsum</Typography> */}
                </Grid>
              </Grid>
              <Grid item xs={12} lg={3} align="left" >
              <Grid item xs={12} >
                  <Typography >SERVICES</Typography>
                  
                  
                  
                </Grid>

                <Grid item xs={12} >
                <Typography><Link> Lorem ipsum</Link></Typography>
                <Typography> <Link>Lorem ipsum</Link></Typography>
                <Typography> <Link>Lorem ipsum</Link></Typography>
                  {/* <Typography>Lorem ipsum</Typography> */}
                </Grid>
              </Grid>
              <br/>
              <Grid item xs={12} lg={3} align="left">
                
              <Grid item xs={12} >
                  <Typography>Connect with us</Typography>
                </Grid>

                <Grid item xs={12} lg={3} >
                  <Typography>
                    <IconButton style={{color:"white"}}><FacebookIcon/></IconButton>
                    {/* <IconButton style={{color:"white"}}><InstagramIcon/></IconButton> */}
                    {/* <IconButton style={{color:"white"}}><TwitterIcon/></IconButton> */}
                    <IconButton style={{color:'white'}}><WhatsAppIcon/></IconButton>
                  </Typography>
                </Grid>
              </Grid>

                

                


                

                
                
                {/* <Grid item xs={12} lg={4}>

                </Grid> */}

                <Grid item xs={12} align="center">
                    {/* Copyrights */}
            <Typography style={{color:"white",fontSize:"12px"}}>CopyRight<IconButton>
                <CopyrightIcon style={{color:"white"}}/>
               
            </IconButton>Fabro Technics | All rights reserved.</Typography>
                </Grid>
            </Grid>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
