import { Grid, Typography } from "@mui/material";

import image5 from '../../Images/5.jpg';
import welding from '../../Images/welding.jpg'

export default function AboutUs() {

    return(
        <>
        <Grid container>

        <Grid item xs={12} align="left" style={{marginLeft:'2.5%',marginRight:'2.5%', marginTop:'1%',backgroundImage:`url(${welding})`,height:'100px',color:'white'}} >
            <Typography variant="h4" style={{fontFamily:'arial black',
            // textShadow:"0 0 5px black, 0 0 5px black",
            marginTop:'1%'}}><b>ABOUT US</b></Typography>
           
            </Grid>
                <br/><br/>
            <Grid item xs={12} align="left" style={{marginLeft:'2.5%',marginRight:'2.5%'}}>
            <Typography><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sint occaecat
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sint occaecatsint
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Typography>
                 </Grid>
                 </Grid>
        </>
    )
}