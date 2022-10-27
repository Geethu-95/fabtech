import { Grid, Typography } from "@mui/material";
import contactImg from '../../Images/contact1.jpg'

export default function Contact() {

    return(

        <>
            <Grid container alignItems={'center'} style= {{marginTop:'3%',marginBottom:'3%'}}>

                <Grid item xs={12} lg={6} style= {{marginTop:'3%',marginBottom:'3%'}}>

                    <img src={contactImg} height="300px" width="500px" alt="Contact Us"></img>
                </Grid>

                <Grid item xs={12} lg={6}>
                <Grid item xs={12} >
                    <Typography>
                        <b>Work & Office Address</b>
                    </Typography>

                    <Typography>
                        #111, Fabro Technics, <br/>
                        Industrial Area, Peenya, <br/>
                        Bangalore, KA, India - 560013.
                    </Typography>
                </Grid>

                <br/><br/>

                <Grid item xs={12} >
                    <Typography>
                        <b>Mobile:</b>
                    </Typography>

                    <Typography>
                        +91-99999999,
                    </Typography>

                    <Typography>
                        +91-99999999
                    </Typography>
                </Grid>

                <br/><br/>

                <Grid item xs={12} >
                    <Typography>
                        <b>Email:</b>
                    </Typography>

                    <Typography>
                        fabrotechnics@gmail.com
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}