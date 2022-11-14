import { Grid, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import MultiActionAreaCard from './SuccessStoriesCard'
import Fade from 'react-reveal/Fade';


export default class SuccessStories extends Component {

 

  state = {
    items: [
      {id: 2, title: 'item #2', comp:<MultiActionAreaCard/>},
      {id: 2, title: 'item #2',comp:<MultiActionAreaCard/>},
      {id: 3, title: 'item #3',comp:<MultiActionAreaCard/>},
      {id: 4, title: 'item #4',comp:<MultiActionAreaCard/>},
      {id: 5, title: 'item #5',comp:<MultiActionAreaCard/>}
    ],

       breakPoints : [
    { width: 1, itemsToShow: 1 },
     { width: 550, itemsToShow: 2, itemsToScroll: 2 },
     { width: 768, itemsToShow: 3 },
     { width: 1200, itemsToShow: 4 }
  ],
  isDesktop:"false",
  isMobile:"false",
  }

  // componentDidMount() {

  //   if (window.innerWidth > 769) {
  //     this.isDesktop(true);
  //     this.isMobile(false);
  //   } else {
  //     this.isMobile(true);
  //     this.isDesktop(false);
  //   }
  // }

  render () {
    const { items } = this.state;
    const {breakPoints} = this.state;

    
    return (
      
      // <Fade right={this.isDesktop} top={this.isMobile} duration={500} delay={200} distance="30px">
      <Fade right duration={700} delay={500} distance="30px">
      <Grid container style={{marginTop:"0px",position:"relative"}}>
         
        <Paper style={{width:'100%', backgroundColor:'#F2D2BD'}}>
          <Typography style={{color:'orange' 
          ,marginTop:'3%', marginBottom:'3%',fontFamily:'comic sans ms',
          // border:'2px solid black' , 
          // borderRadius:'8px',
          display:'inline-block',
          padding:'4px 4px 4px 4px'
          ,
          // display:'inline-block',padding:'1% 1% 1% 1%',border:"3px solid white"
        }}><h2><b>HAPPY CLIENT STORIES</b></h2></Typography>
        <Carousel breakPoints={breakPoints} style={{marginBottom:'2%'}}>
        {items.map(item => <div key={item.id}>{item.comp}</div>)}
      </Carousel>
        </Paper>
       
      </Grid>
      </Fade>
     
    )
  }
}