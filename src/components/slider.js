import React from 'react'
import { Container, Card } from '@material-ui/core'
import useStyles from '../styles/slider'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const SliderComponent = () => {
    const classes = useStyles();
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    const settings = { 
        centerMode: true, 
        dots: false, 
        variableWidth: true, 
        autoplay: true, 
        focusOnSelect: true, 
        pauseOnHover: false, 
        arrows: false,
        centerPadding: '0px', 
        infinite:true,
        dots: true,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0px"
              }}
            >
              <ul style={{ marginBottom: "20px", marginTop: "0px" }}>
                  {dots}
              </ul>
            </div>
        ),
        customPaging: i => (
        <div
            style={{
                width: "20px",
            }}
        >
            <div style={{height: "20px"}}>
                <div style={{height: "4px", width: "20px", backgroundColor: '#fff', borderRadius: 5}}/>
            </div>
        </div>
        )
    }
    return(
        <Container className={classes.container}>
            <div className={classes.carousel}>
                <Slider {...settings}>
                    <div className={classes.contentSlider}>
                        <img src={require('../images/banners/1.jpg')} className={classes.imageSlider}/>
                    </div>
                    <div className={classes.contentSlider}>
                        <img src={require('../images/banners/2.png')} className={classes.imageSlider}/>
                    </div>
                    <div className={classes.contentSlider}>
                        <img src={require('../images/banners/3.jpg')} className={classes.imageSlider}/>
                    </div>
                    <div className={classes.contentSlider}>
                        <img src={require('../images/banners/4.jpg')} className={classes.imageSlider}/>
                    </div>
                </Slider>
            </div>
        </Container>
    )
}
export default SliderComponent;