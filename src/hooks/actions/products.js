import axios from 'axios';
export function GET_PRODUCT(dispatch, id){
    return axios.get(`http://localhost:4000/product/${id}`)
    .then(function (response) {
        dispatch({
            type:'GET_PRODUCT', 
            payload: response.data[0]
        });
    })
}
export function ALL_PRODUCTS(dispatch){
    axios.get(`http://localhost:4000/products`)
    .then(function (response) {
        dispatch({
            type:'ALL_PRODUCTS', 
            payload: response.data
        });
    })
}