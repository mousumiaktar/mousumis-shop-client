import React from 'react';
import "./Navbar.css";
import logo from "../../images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
            <nav style={{background:"#0B0B0B"}}>
                <div className='left'>
                    <div className='navlogo'>
                        <NavLink to='/'><img src={logo} alt="" /></NavLink>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type="text" name="" id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <NavLink to="/login">signin</NavLink>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className='avatar' />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;