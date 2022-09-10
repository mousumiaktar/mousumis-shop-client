import React from 'react';
import midbanner from '../../images/midbanner/midbanner2.jpg';

const Midbanner = () => {
    return (
        <div className='midbanner-area'>
            <div className='midbanner'>
                <img src={midbanner} alt="" />
            </div>
            <div className='full-area'>
                <div className='title-details' data-aos="fade-down-right">
                    <h2>It’s About Good Food & </h2>
                    <h2>Fresh Ingredients</h2>
                </div>
                <div className='midbanner-details' data-aos="fade-down-left">
                    <div>
                        <h3>Opening </h3>
                        <hr />
                        <p>Monday</p>
                        <p>Tuesday</p>
                        <p>Wednesday</p>
                        <p>Thursday</p>
                        <p>Friday</p>
                        <p>Saturday,Sunday</p>
                    </div>
                    <div>
                        <h3>Hours</h3>
                        <hr />
                        <p>09:00 - 18:00</p>
                        <p>10:00 - 18:00</p>
                        <p>11:00 - 18:00</p>
                        <p>12:00 - 18:00</p>
                        <p>14:00 - 18:00</p>
                        <p>Closed</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Midbanner;