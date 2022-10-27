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



const useStyles = makeStyles((theme)=>({
 
    iconBtn: {
      marginRight:'100px',
      // marginLeft: "20px",
      // paddingRight:'20px',
    },
    
 
}));

export default function ProductsHome() {

  const classes = useStyles();
    return(

     
      <Accordion style={{height:'50%',position:"relative",
      // backgroundImage:`url("../Images/1.jpg)`
      backgroundImage: `url(${image4})`
      
      }}
      defaultExpanded>
        
        <AccordionSummary 
        // classes={{ content: classes.customAccordianSummary.content }}
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          IconButtonProps={{ className: classes.iconBtn }}
          
        >
          <Grid container>
            <Grid item xs={12}>
            <Typography style={{fontFamily:'montserrat',color:'white',textShadow:"0 0 5px black, 0 0 5px black"}}><h2><b>PRODUCTS  LIST</b></h2></Typography>
            </Grid>

            {/* <Grid item xs={12}>
            <Button color="primary" variant="contained">View More ...</Button>
            </Grid> */}
          </Grid>
        
         
        </AccordionSummary>

        <AccordionDetails >
        <Grid container >
            <Paper style={{height:'80%px',width:'100%',backgroundColor:'#CCED00'}}>
                <Grid container spacing={1.4} style={{marginLeft:'2%',marginBottom:'2%', marginTop:'2%'}}>
                    {/* <Grid item xs={12} style={{marginTop:'1%', marginBottom:'1%'}}>
                        <Typography><h4><b> PRODUCTS LIST </b></h4> </Typography>
                        </Grid> */}
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
        <Button color="primary" variant="contained" style={{textTransform:"capitalize"}}>
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
        </AccordionDetails>
      </Accordion>



        
    );

}