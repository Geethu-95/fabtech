import { Button, Paper } from '@mui/material';
import image1 from '../Images/1.jpg'
import image2 from '../Images/2.jpg'
import homePic from '../Images/homepage1.jpg'
import homePicedited from '../Images/homePicedited.jpg'
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
      <img src={homePicedited} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block " >
        {/* <Paper style={{opacity:'30%'}}> */}
        <h3 style={{fontFamily:'Harlow Solid Italic', color:'yellow',}}>We are situated in Bangalore, Karnataka. With over 25+ years of industry experience and many happy clients, we ensure to provide the best of quality and designs!
        View our product catalogue and get a quote!
        </h3>
        {/* </Paper> */}
        <br/>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          style={{backgroundColor:"#CC5500",color:"white",border:'0',borderRadius:'5px',height:'40px',width:'130px'}} contained>
             View Products
          </motion.button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={homePic} class="d-block w-100" alt="..."/>
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