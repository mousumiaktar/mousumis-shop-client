import React, { useContext } from 'react';
import "./Navbar.css";
import logo from "../../images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { Logincontext } from '../context/ContextProvider';
import { useEffect } from 'react';
import Leftheader from './Leftheader';
import { useState } from 'react';



const Navbar = () => {

    const { account, setAccount } = useContext(Logincontext);
    // console.log(account);


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const [dropen, setDropen] = useState(false);

    const getdetailsvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            console.log("first login");
        } else {
            setAccount(data);
        }
    };

    const handleDrawerOpen = () => {
        setDropen(true);
    }

    const handleDrawerClose = () => {
        setDropen(false);
    }


    useEffect(() => {
        getdetailsvaliduser();
    }, []);



    return (
        <header>
            <nav style={{ background: "#0B0B0B" }}>
                <div className='left'>

                    <IconButton className="hamburgur" onClick={handleDrawerOpen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <Drawer open={dropen} onClose={handleDrawerClose}>
                        <Leftheader logClose={handleDrawerClose} />
                    </Drawer>

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
                            <Avatar className='avatar2'

                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}


                            >{account.fname[0].toUpperCase()}</Avatar>
                            :
                            <Avatar className='avatar'></Avatar>
                    }

                    
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        {
                            account ? <MenuItem onClick={handleClose}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} /> Logout</MenuItem> : ""
                        }
                    </Menu>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;