import React from 'react'
import { Container, Card, Grid, Typography } from '@material-ui/core'
import useStyles from '../styles/category'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CategorySliderComponent from '../components/categorySlider';
import CategoryTab from '../components/categoryTab';
import CategoryBottomSliderComponent from '../components/categoryBottomSlider';
const CategoryComponent = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Card className={classes.content}>
                <Grid container spacing={1}>
                    <Grid item md={6}>
                        <Typography variant="h6">Kategori Pilihan</Typography>
                        <br/>
                        <CategorySliderComponent/>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6">Top-Up & Tagihan</Typography>
                        <br/>
                        <CategoryTab/>
                    </Grid>
                    <Grid item md={12}>
                        <CategoryBottomSliderComponent/>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}
export default CategoryComponent;