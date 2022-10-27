import { Button } from '@mui/material';
import image1 from '../Images/1.jpg'
import image2 from '../Images/2.jpg'
import './Jumbotron.css';

export default function Carousel () {

    return(
      <div style={{marginBottom:"5px"}}>
        
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={image2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block " >
        <h3 style={{color:'yellow'}}>With over 25+ years of industry experience and many happy clients, we ensure to provide the best of quality and designs!</h3><br/>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
        <Button style={{backgroundColor:"#F99D5A",color:"white"}} contained> View Products</Button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image1} class="d-block w-100" alt="..."/>
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