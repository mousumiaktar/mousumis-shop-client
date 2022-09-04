import React, { useContext } from 'react';
import "./Navbar.css";
import logo from "../../images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { Logincontext } from '../context/ContextProvider';


const Navbar = () => {

    const { account, setAccount } = useContext(Logincontext);
    console.log(account);

    return (
        <header>
            <nav style={{ background: "#0B0B0B" }}>
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
                        {
                            account ?
                                <NavLink to="/buynow">
                                    <Badge badgeContent={account.carts.length} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge>
                                </NavLink>
                                :
                                <NavLink to="/buynow">
                                    <Badge badgeContent={0} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge>
                                </NavLink>
                        }


                        <p>Cart</p>
                    </div>
                    {
                        account ?
                            <Avatar className='avatar'>{account.fname[0].toUpperCase()}</Avatar>
                            :
                            <Avatar className='avatar'></Avatar>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;