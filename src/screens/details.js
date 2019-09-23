import React, { useEffect, useReducer } from 'react'
import HeaderComponent from '../components/header';
import ContentDetailComponent from '../components/contentDetail';
import { productsReducer } from '../hooks/reducers/products';
import initialStateProducts from '../hooks/initialState/products';
import { GET_PRODUCT } from '../hooks/actions/products';
import { Container, Card, Grid, Typography } from '@material-ui/core'
import StarRatings from 'react-star-ratings';
const Details = (props) => {
    const [product, dispatch] = useReducer(productsReducer, initialStateProducts);
    useEffect(()=> {
        GET_PRODUCT(dispatch, props.match.params.id)
    }, []);
    return(
        <div className="App">
          <HeaderComponent/>
            <Container style={{marginTop: 90}}>
                <p>Beranda > {product.resultsProduct.name}</p>
                <Grid container spacing={1}>
                    <Grid item md={4}>
                        <img src={product.resultsProduct.image} style={{height: 400}}/>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6">{product.resultsProduct.name}</Typography>
                        <StarRatings
                            rating={product.resultsProduct.rating}
                            starRatedColor="#f90"
                            numberOfStars={5}
                            starDimension="15px"
                            starSpacing="2px"
                            name='rating'
                        />
                        <Typography variant="h6" style={{color: '#ff5722'}}>Rp. {product.resultsProduct.price}</Typography>
                    </Grid>
                    <Grid item md={2}>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Details;