import React from 'react';
import menu1 from '../../images/menu/menu1.jpg'
import menu2 from '../../images/menu/menu2.jpg'
import menu3 from '../../images/menu/menu3.jpg'
import menu5 from '../../images/menu/menu5.jpg'
import menu6 from '../../images/menu/menu6.jpg'
import menu7 from '../../images/menu/menu7.jpg'
import './menu.css';
// import circle from '../../images/midbanner/circle2.png'
import './midbanner.css';

const Menu = () => {
    return (
        <div className='menu-around'>
            {/* <div className='main-img'>
                <img src={circle} alt="" />
            </div> */}
            <div className='menu-full-area'>
                <div className='menu-top'>
                    <h1>Popular Menu</h1>
                    <p>Restaurants are known to provide excellent social settings and</p>
                    <p>you could enjoy a wonderful meal amidst friends, family, and great ambiance.</p>
                </div>
                <div className='menu-area'>
                    <div className='menu-left'>
                        <div className='menu-detail'>
                            <img src={menu1} alt="" />
                            <div className='short-detail'>
                                <h3>Beef Burger Stack <span>$30.00
                                </span></h3>
                                <p>Hot Big Full Plater Cosmos</p>
                            </div>
                        </div>
                        <div className='menu-detail'>
                            <img src={menu2} alt="" />
                            <div className='short-detail'>
                                <h3>Cheeseburger Stack <span>$35.00
                                </span></h3>
                                <p>Hot Big Full Plater Cosmos</p>
                            </div>
                        </div>

                    </div>

                    <div className='menu-middle'>
                        <div className='menu-detail'>
                            <img src={menu3} alt="" />
                            <div className='short-detail'>
                                <h3>Mushroom Pizza <span>$40.00
                                </span></h3>
                                <p>Hot Big Full Plater Cosmos</p>
                            </div>
                        </div>
                        <div className='menu-detail'>
                            <img src={menu7} alt="" />
                            <div className='short-detail'>
                                <h3>Pizza Alla Pala <span>$60.00
                                </span></h3>
                                <p>Hot Big Full Plater Cosmos</p>
                            </div>
                        </div>
                    </div>


                    <div className='menu-right'>
                        <div className='menu-detail'>
                            <img src={menu5} alt="" />
                            <div className='short-detail'>
                                <h3>Egg Cheese Bread <span>$50.00
                                </span></h3>
                                <p>Hot Big Full Plater Cosmos</p>
                            </div>
                        </div>
                        <div className='menu-detail'>
                            <img src={menu6} alt="" />
                            <div className='short-detail'>
                                <h3>Pizza Al Tonno <span>$55.00
                                </span></h3>
                                <p>Hot Big Full Plater Cosmos</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;