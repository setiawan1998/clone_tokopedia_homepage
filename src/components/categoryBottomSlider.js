import React from 'react'
import { Container, Card, Typography, Grid, GridList, GridListTile } from '@material-ui/core'
import useStyles from '../styles/slider'
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const CategoryBottomSliderComponent = () => {
    const classes = useStyles();
    return(
        <div className={classes.carouselCategoryBottom}>
            <GridList style={{flexWrap: 'nowrap', height: 60, overflowY: 'hidden', overflowX: 'scroll'}}>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/1.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Belanja
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/2.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Handphone
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/3.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Pulsa
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/4.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                T Salam
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/5.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Pascabayar
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/6.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Emas
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/7.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Pay Later
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/8.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Gift Card
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/9.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Komisi
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 175}}>
                    <div className={classes.contentSliderCategoryBottom}>
                        <Grid container spacing={0} className={classes.GridCategoryBottom}>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <img src={require('../images/categoriesBottom/10.png')} className={classes.contentSliderCategoryImageBottom}/>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop: 7}}>
                                Promo
                            </Grid>
                        </Grid>
                    </div>
                </GridListTile>
            </GridList>
        </div>
    )
}
export default CategoryBottomSliderComponent;