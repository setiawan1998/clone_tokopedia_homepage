import React from 'react'
import { Container, Card, Typography, Grid, GridList, GridListTile } from '@material-ui/core'
import useStyles from '../styles/slider'
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const StickyCategoriesComponent = () => {
    const classes = useStyles();
    return(
        <Container style={{marginTop: 30}}>
            <GridList style={{flexWrap: 'nowrap', height: 90, overflowY: 'hidden', overflowX: 'scroll'}}>
                <GridListTile style={{width: 215}}>
                    <div style={{backgroundImage: `url(${require('../images/stickyBar/1.png')})`, padding: 10, width: 175, borderRadius: 10, height: 50}}>
                        <strong style={{color: '#fff'}}>
                            For You
                        </strong>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 215}}>
                    <div style={{backgroundImage: `url(${require('../images/stickyBar/2.png')})`, padding: 10, width: 175, borderRadius: 10, height: 50}}>
                        <strong style={{color: '#fff'}}>
                            Special Discount
                        </strong>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 215}}>
                    <div style={{backgroundImage: `url(${require('../images/stickyBar/3.png')})`, padding: 10, width: 175, borderRadius: 10, height: 50}}>
                        <strong style={{color: '#fff'}}>
                            Gratis Ongkir
                        </strong>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 215}}>
                    <div style={{backgroundImage: `url(${require('../images/stickyBar/4.png')})`, padding: 10, width: 175, borderRadius: 10, height: 50}}>
                        <strong style={{color: '#fff'}}>
                            Cashback
                        </strong>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 215}}>
                    <div style={{backgroundImage: `url(${require('../images/stickyBar/3.png')})`, padding: 10, width: 175, borderRadius: 10, height: 50}}>
                        <strong style={{color: '#fff'}}>
                            Laptop Consumer
                        </strong>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 215}}>
                    <div style={{backgroundImage: `url(${require('../images/stickyBar/2.png')})`, padding: 10, width: 175, borderRadius: 10, height: 50}}>
                        <strong style={{color: '#fff'}}>
                            Kamar Tidur
                        </strong>
                    </div>
                </GridListTile>
                <GridListTile style={{width: 215}}>
                    <div style={{backgroundImage: `url(${require('../images/stickyBar/4.png')})`, padding: 10, width: 175, borderRadius: 10, height: 50}}>
                        <strong style={{color: '#fff'}}>
                            Parfum, Cologne, & Fragrance
                        </strong>
                    </div>
                </GridListTile>
            </GridList>
        </Container>
    )
}
export default StickyCategoriesComponent;