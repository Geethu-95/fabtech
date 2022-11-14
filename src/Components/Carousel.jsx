import { Button, Grid, Paper, Typography } from '@mui/material';
import image1 from '../Images/1.jpg'
import image2 from '../Images/2.jpg'
import homePic from '../Images/homepage1.jpg'
import homePicedited from '../Images/homePicedited.jpg'
import welding from '../Images/welding.jpg'
import welding1 from '../Images/welding1.jpg'
import welding2 from '../Images/welding2.jpg'
import weldingpic from '../Images/weldingpic.jpg'
import './Jumbotron.css';
import { motion } from "framer-motion";

export default function Carousel () {

    return(
      <div style={{marginBottom:""}}>
        
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={welding2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block d-flex h-100 align-items-center justify-content-center">
       
        <Typography>

        <h1 style={{fontFamily:'arial black', color:'yellow',}}>
          Best in quality and service.
        </h1>
        <h4 style={{fontFamily:'Harlow Solid Italic', color:'yellow',}}>We are situated in Bangalore, Karnataka.
        Our services vary from iron fabrication, welding to consultancy.</h4>
        </Typography>
       
      </div>
      <div class="carousel-caption  ">
      <motion.button 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          style={{backgroundColor:"#CC5500",color:"white",border:'0',borderRadius:'5px',height:'40px',width:'130px'}} contained>
             View Services
          </motion.button>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={homePicedited} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    
    );
}