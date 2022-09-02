import React, { useEffect } from 'react';
import './home.css';
import Banner from './Banner';
import Slide from './Slide';
import {getProducts} from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";

const Maincomp = () => {

    const {products} = useSelector(state=> state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    return (
        <>
            <div className='home_section'>
                <div className="banner_part">
                    <Banner />
                </div>

                <div className='slide_part'>
                    <div className="left_slide">
                        <Slide title="Deal of The day" products={products} />
                    </div>

                    <div className="right_slide">
                        <h4>Festive latest Items</h4>
                        <img src="https://coreldrawdesign.com/resources/previews/preview-restaurant-food-banner-template-design-1621680592.jpg" alt="rightimg" />
                        <a href="#">see more</a>
                    </div>
                </div>
                {/* <Slide title="Today's Deal" products={products} /> */}
            </div>
        </>
    );
};

export default Maincomp;