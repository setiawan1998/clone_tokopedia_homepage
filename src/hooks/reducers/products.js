export function productsReducer(state, action){
    switch (action.type){
        case "ALL_PRODUCTS":
            return {...state, resultsProducts: action.payload, loadingProducts: false}
        case "GET_PRODUCT":
            return {...state, resultsProduct: action.payload, loadingProduct: false}
        default:
            return state
    }
}