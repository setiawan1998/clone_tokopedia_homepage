import React from 'react'
import { Container, Grid, Card, Typography } from '@material-ui/core'
import useStyles from '../styles/highestPurchase'
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const HighestPurchaseComponent = () => {
    const classes = useStyles();
    return(
        <Container style={{marginTop: 25}}>
            <Typography variant="h6">Paling Banyak Dicari</Typography>
            <br/>
            <Grid container spacing={3} className={classes.GridCategoryBottom}>
                <Grid item md={3}>
                    <Card className={classes.card}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item md={4}>
                                <img src={require('../images/highestPurchase/1.jpg')} className={classes.img}/>
                            </Grid>
                            <Grid item md={8}>
                                <b>Jemuran Baju</b>
                                <br/>
                                <small>27rb Produk</small>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card className={classes.card}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item md={4}>
                                <img src={require('../images/highestPurchase/2.jpg')} className={classes.img}/>
                            </Grid>
                            <Grid item md={8}>
                                <b>Buble Wrap</b>
                                <br/>
                                <small>65rb Produk</small>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card className={classes.card}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item md={4}>
                                <img src={require('../images/highestPurchase/3.jpg')} className={classes.img}/>
                            </Grid>
                            <Grid item md={8}>
                                <b>Brush Pen</b>
                                <br/>
                                <small>17rb Produk</small>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card className={classes.card}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item md={4}>
                                <img src={require('../images/highestPurchase/4.jpg')} className={classes.img}/>
                            </Grid>
                            <Grid item md={8}>
                                <b>Samsung A50S</b>
                                <br/>
                                <small>1rb Produk</small>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
export default HighestPurchaseComponent;