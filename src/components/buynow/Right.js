import React, { useEffect, useState } from 'react';

const Right = ({item}) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount()
    }, [item])

    const totalAmount = () => {
        let price = 0;
        item.map((item) => {
            return price = item.price.cost + price
        });
        setPrice(price);
    }


    return (
        <div className="right_buy">
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery. <br />
                    <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
                <h3>Subtotal ({item?.length || 0} items): <span style={{ fontWeight: "700" }}> ₹{price}.00</span></h3>
                <button className="rightbuy_btn">Proceed to Buy</button>
                <div className="emi">
                    Emi available
                </div>
            </div>
        </div>
    );
};

export default Right;