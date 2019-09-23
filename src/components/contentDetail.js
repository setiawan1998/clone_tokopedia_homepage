import React from 'react'
import { Container, Card, Grid, Typography } from '@material-ui/core'
import useStyles from '../styles/category'
import "react-multi-carousel/lib/styles.css";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const ContentDetailComponent = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container} style={{marginTop: 100}}>
        </Container>
    )
}
export default ContentDetailComponent;