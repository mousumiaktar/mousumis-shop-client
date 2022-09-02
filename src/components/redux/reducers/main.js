import {getProductsreducers} from "./Productsreducer.js";
import {combineReducers} from "redux";


const rootreducers = combineReducers({
    getproductsdata : getProductsreducers
});

export default rootreducers;