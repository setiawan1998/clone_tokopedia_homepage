import React from 'react'
import { Container, Card, Grid, Typography } from '@material-ui/core'
import useStyles from '../styles/category'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const OfficialStoreComponent = () => {
    const classes = useStyles();
    const settings = { 
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false, 
        variableWidth: true, 
        autoplay: false, 
        focusOnSelect: true, 
        pauseOnHover: false, 
        arrows: false,
        centerPadding: '0px', 
        infinite:true,
    }
    return(
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Typography variant="h6">Official Store</Typography>
                    <br/>
                    <Grid container spacing={0}>
                        <Grid item md={4}>
                            <img src={require('../images/officialStore/1.png')}/>
                        </Grid>
                        <Grid item md={4}>
                            <img src={require('../images/officialStore/2.png')}/>
                        </Grid>
                        <Grid item md={4}>
                            <img src={require('../images/officialStore/3.png')}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h6">Top Trending</Typography>
                    <br/>
                        <Grid container spacing={0}>
                            <Grid item md={4}>
                                <img src={require('../images/officialStore/6.jpg')}/>
                            </Grid>
                            <Grid item md={4}>
                                <img src={require('../images/officialStore/5.jpg')}/>
                            </Grid>
                            <Grid item md={4}>
                                <img src={require('../images/officialStore/7.jpg')}/>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default OfficialStoreComponent;