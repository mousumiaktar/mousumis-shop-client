import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './buynow.css';
import Option from './Option';
import Right from './Right';
import Subtotal from './Subtotal';

const Bynow = () => {

    const [cartdata, setCartdata] = useState("");
    // console.log(cartdata.carts);

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application"
            },
            credentials: "include"
        });

        const data = await res.json();

        if (res.status !== 201) {
            console.log("error");
        } else {
            setCartdata(data.carts);
        }
    }


    useEffect(() => {
        getdatabuy();
    }, [])



    return (
        <>{
            cartdata.length ?
                <div className='buynow_section'>
                    <div className='buynow_container'>
                        <div className='left_buy'>
                            <h1>Shopping Cart</h1>
                            <p>Select all items</p>
                            <span className="leftbuyprice">Price</span>
                            <Divider />

                            {
                                cartdata.map((e, k) => {
                                    return (
                                        <>
                                            <div className='item_containert'>
                                                <img src={e.url} alt="" />
                                                <div className='item_details'>
                                                    <h3>{e.title}</h3>
                                                    <h3 className="diffrentprice">₹4049.00</h3>
                                                    <p className="unusuall">Usually dispatched in 8 days.</p>
                                                    <p>Eligible for FREE Shipping</p>
                                                    <Option />
                                                </div>
                                                <h3 className="item_price">₹{e.price.cost}.00</h3>
                                            </div>
                                            <Divider />
                                        </>
                                    )
                                })
                            }


                            
                            <Subtotal item={cartdata} />
                        </div>
                        <Right item={cartdata} />
                    </div>
                </div>
                : ""

        }

        </>
    );
};

export default Bynow;