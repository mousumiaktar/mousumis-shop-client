import React from 'react';
import './footer.css';

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

    return (
        <footer>
            <div className='footer-details'>
                <div>
                    <h3>Restaurant</h3>
                    <p>Our feet are on the ground, but our the desi ambitions are to above the clouds a Here is how we move to satisfy our customers</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <p><span>-</span>About Us</p>
                    <p><span>-</span>Menus</p>
                    <p><span>-</span>Shop</p>
                    <p><span>-</span>Wishlist</p>
                    <p><span>-</span>Contact Us</p>
                    <p><span>-</span>Career</p>

                </div>
                <div>
                    <h3>Information</h3>
                    <p>Phone: 882-675-000</p>
                    <p>Email: hello@food.com</p>
                    <p>Address: 50-Road-Dhaka</p>
                </div>
                <div className='single-detail'>
                    <div>
                        <h3>Opening Hours</h3>
                        <p>Monday</p>
                        <p>Tuesday</p>
                        <p>Wednesday</p>
                        <p>Thursday</p>
                        <p>Friday</p>
                        <p>Saturday,Sunday</p>
                    </div>
                    <div>
                        <h3>Hours</h3>
                        <p>09:00 - 18:00</p>
                        <p>10:00 - 18:00</p>
                        <p>11:00 - 18:00</p>
                        <p>12:00 - 18:00</p>
                        <p>14:00 - 18:00</p>
                        <p>Closed</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="lastdetails">
                <p>Copyright © {year}. All Rights Reserved by <i style={{color:"#FE9108"}}>Mousumi</i></p>
            </div>
        </footer>
    );
};

export default Footer;