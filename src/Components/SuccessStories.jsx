import { Grid, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import MultiActionAreaCard from './SuccessStoriesCard'


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
  }

  render () {
    const { items } = this.state;
    const {breakPoints} = this.state;
    return (
      
      <Grid container style={{marginTop:"0px",position:"relative"}}>
        <Paper style={{width:'100%', backgroundColor:'#ADD8E6'}}>
          <Typography style={{marginTop:'1%', marginBottom:'1%',fontFamily:'montserrat'}}><h2><b>SUCCESS STORIES</b></h2></Typography>
        <Carousel breakPoints={breakPoints}>
        {items.map(item => <div key={item.id}>{item.comp}</div>)}
      </Carousel>
        </Paper>
        
      </Grid>

     
    )
  }
}