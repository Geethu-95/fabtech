import { Grid, Paper } from "@mui/material";
import image3 from '../Images/3.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image4 from '../Images/4.jpg'
// import { styled, createTheme, ThemeProvider } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { useState,useEffect } from "react";
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles((theme)=>({
 
    iconBtn: {
      marginRight:'100px',
      // marginLeft: "20px",
      // paddingRight:'20px',
    },
    
 
}));


export default function ProductsHome() {


  
const [shadow,setShadow] = useState('1');

const onMouseOver = () => setShadow('3');
const onMouseOut = () => setShadow('3');

const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const classes = useStyles();
    return(

    
        <>
         <Fade left={isDesktop} bottom={isMobile} duration={700} delay={500} distance="30px">
        <Grid container >
          {/* <Grid container style={{height:'200px'}}> */}
            <Grid item xs={12} style={{paddingTop:'2%',paddingBottom:'2%',backgroundColor:'white'}} >
            <Typography style={{fontFamily:'arial black',color:'black',
            // border:'2px solid black' , borderRadius:'8px',
            display:'inline-block',padding:'4px 4px 4px 4px'
            // backgroundColor:'white',padding:'1% 1% 1% 1%',border:"3px solid grey",display:'inline-block'
            // textShadow:"0 0 5px black, 0 0 5px black"

            }}
            ><h2><b>PRODUCTS & SERVICES</b></h2></Typography>
            </Grid>
            {/* <Grid item xs={12} style={{backgroundColor:'maroon'}}>
              <Typography variant="h8" style={{fontFamily:'arial black',color:'white',}}>
                Choose from out list of products to view & quote
              </Typography>
            </Grid> */}

           
          {/* </Grid> */}
        
         
      
        <Grid container style={{marginTop:'0',}} >
            <Paper style={{height:'100%',width:'100%',backgroundColor:'#FFFF8F'
            // backgroundColor:'#CCED00'
            }}>
                <Grid container spacing={1.4} style={{marginLeft:'2%',marginBottom:'5%', marginTop:'2%'}}>
                    {/* <Grid item xs={12} style={{marginTop:'1%', marginBottom:'1%'}}>
                        <Typography><h4><b> PRODUCTS LIST </b></h4> </Typography>
                        </Grid> */}
                    <Grid item xs={12} lg={3}>
            <Card sx={{ maxWidth: 500}} style={{width:'250px'}} zDepth={shadow} onMouseEnter={onMouseOver}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image3}
          alt="Spiral stair case"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spiral stair case
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained" style={{textTransform:"capitalize"}}>
          More...
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} lg={3}>
    <Card sx={{ maxWidth: 500}} style={{width:'250px'} }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image3}
          alt="Spiral stair case"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spiral stair case
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained"  style={{textTransform:"capitalize"}}>
          More...
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} lg={3}>
    <Card sx={{ maxWidth: 500}} style={{width:'250px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image3}
          alt="Spiral stair case"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spiral stair case
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained"  style={{textTransform:"capitalize"}}>
          More...
        </Button>
      </CardActions>
    </Card>
</Grid>
<Grid item xs={12} lg={3}>
    <Card sx={{ maxWidth: 500}} style={{width:'250px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image3}
          alt="Spiral stair case"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spiral stair case
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained"  style={{textTransform:"capitalize"}}>
          More...
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
            </Paper>

        </Grid>
        </Grid>
        </Fade>
        </>
        
   



        
    );

}