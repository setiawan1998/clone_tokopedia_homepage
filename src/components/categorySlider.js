import React from 'react'
import { Container, Card, Typography } from '@material-ui/core'
import useStyles from '../styles/slider'
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const CategorySliderComponent = () => {
    const classes = useStyles();
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false, 
        variableWidth: true, 
        autoplay: true, 
        focusOnSelect: true, 
        pauseOnHover: false, 
        arrows: false,
        centerPadding: '0px', 
        infinite:true,
    }
    return(
        <div className={classes.carouselCategory}>
            <Slider {...settings}>
                <div className={classes.contentSliderCategory}>
                    <img src={require('../images/categories/1.jpg')} className={classes.contentSliderCategoryImage}/>
                </div>
                <div className={classes.contentSliderCategory}>
                    <img src={require('../images/categories/2.jpg')} className={classes.contentSliderCategoryImage}/>
                </div>
                <div className={classes.contentSliderCategory}>
                    <img src={require('../images/categories/3.jpg')} className={classes.contentSliderCategoryImage}/>
                </div>
                <div className={classes.contentSliderCategory}>
                    <img src={require('../images/categories/4.jpg')} className={classes.contentSliderCategoryImage}/>
                </div>
                <div className={classes.contentSliderCategory}>
                    <img src={require('../images/categories/5.jpg')} className={classes.contentSliderCategoryImage}/>
                </div>
                <div className={classes.contentSliderCategory}>
                    <img src={require('../images/categories/6.jpg')} className={classes.contentSliderCategoryImage}/>
                </div>
            </Slider>
        </div>
    )
}
export default CategorySliderComponent;