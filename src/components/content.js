import React, { useReducer, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, Typography, Grid, CardActionArea, CardMedia, CardContent } from '@material-ui/core'
import "react-multi-carousel/lib/styles.css";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Link } from "react-router-guard";
import { productsReducer } from '../hooks/reducers/products';
import initialStateProducts from '../hooks/initialState/products';
import { ALL_PRODUCTS } from '../hooks/actions/products';
import StarRatings from 'react-star-ratings';
const ContentComponent = () => {
    const [products, dispatch] = useReducer(productsReducer, initialStateProducts);
    const useStyles = makeStyles({
        card: {
          maxWidth: 500,
        },
        media: {
          height: 150,
        },
      });
    const classes = useStyles();
    useEffect(()=> {
        ALL_PRODUCTS(dispatch)
    }, []);
    return(
        <Container style={{marginTop: 30}}>
            <Grid container spacing={2}>
                {products.resultsProducts.map((item, index) => (
                    <Grid key={index} item lg={2} md={3} sm={4} xs={6}>
                        <Link to={`/details/${item.id}`} style={{textDecoration: 'none'}}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={item.image}
                                    />
                                    <CardContent>
                                        <strong style={{fontSize: 16}}>
                                            {item.name}
                                        </strong>
                                        <br/>
                                        <strong style={{fontSize: 15, color: '#f00'}}>
                                            Rp {item.price}
                                        </strong>
                                        <br/>
                                        <small>{item.location}</small>
                                        <br/>
                                        <StarRatings
                                            rating={item.rating}
                                            starRatedColor="yellow"
                                            numberOfStars={5}
                                            starDimension="15px"
                                            starSpacing="2px"
                                            name='rating'
                                        />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default ContentComponent;