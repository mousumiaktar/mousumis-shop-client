import React from 'react';
import category1 from '../../images/category/category1.png';
import category2 from '../../images/category/category2.png';
import category3 from '../../images/category/category3.png';
import category5 from '../../images/category/category5.png';
import './category.css';

const Category = () => {
    return (
        <div className='category-full-area' >
            <h1 className='category-title'>Our Food Category</h1>
            <div className='category-area'>
                <div className='category-details'>
                    <img src={category1} alt="" />
                    <h3>Grilled Chicken Stick</h3>
                    <h4>52.35$</h4>
                </div>
                <div className='category-details'>
                    <img src={category2} alt="" />
                    <h3>Chicken Barista platter</h3>
                    <h4>32.35$</h4>
                </div>
                <div className='category-details'>
                    <img src={category3} alt="" />
                    <h3>French Fries Pack</h3>
                    <h4>15.35$</h4>
                </div>
                <div className='category-details'>
                    <img src={category5} alt="" />
                    <h3>French Fries Pack</h3>
                    <h4>15.35$</h4>
                </div>
            </div>
        </div>
    );
};

export default Category;