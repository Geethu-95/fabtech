import { Grid, Typography } from "@mui/material";

export default function Contact() {

    return(

        <>
            <Grid container alignItems={'center'}>
                
                <Grid item xs={12}>
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

                <Grid item xs={12}>
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

                <Grid item xs={12}>
                    <Typography>
                        <b>Email:</b>
                    </Typography>

                    <Typography>
                        fabrotechnics@gmail.com
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}