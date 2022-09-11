import React, { useContext } from 'react';
import "./Navbar.css";
import logo from "../../images/logo2.png";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Logincontext } from '../context/ContextProvider';
import { useEffect } from 'react';
import Leftheader from './Leftheader';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';



const Navbar = () => {

    const { account, setAccount } = useContext(Logincontext);
    // console.log(account);

    const history = useNavigate();

    // METARIAL UI MENU.........................
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [text, setText] = useState("");
    console.log(text);
    const [listOpen, setListOpen] = useState(false);

    const { products } = useSelector(state => state.getproductsdata);


    const [dropen, setDropen] = useState(false);


    // USER VALIDATION............................. 
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



    //USER LOGOUT............................... 
    const logOutUser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        // console.log(data2);

        if (res2.status !== 201) {
            console.log("first login");
        } else {
            toast.success("user log out", {
                position: "top-center",
            });
            history("/");
            setAccount(false);

        }
    };


    const getText = (items) => {
        setText(items);
        setListOpen(false);
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
                        <Leftheader logClose={handleDrawerClose} logoutuser={logOutUser}/>
                    </Drawer>

                    <div className='navlogo'>
                        <NavLink to='/'><img src={logo} alt="" /></NavLink>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type="text" name=""
                            onChange={(e) => getText(e.target.value)} placeholder='Search food' id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>


                        {/* Search filter */}
                        {
                            text &&
                            <List className='extrasearch' hidden={listOpen} >
                                {
                                    products.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`getproductsone/${product.id}`} onClick={()=>setListOpen(true)}>
                                                {product.title}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }


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
                                    <Badge badgeContent={account.carts?.length || 0} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge>
                                </NavLink>
                                :
                                <NavLink to="/login">
                                    <Badge badgeContent={0} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge>
                                </NavLink>
                        }

                        <ToastContainer />
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

                            account ? <MenuItem onClick={handleClose} style={{ margin: 10 }} ><div onClick={logOutUser}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} /> Logout</div></MenuItem> : ""


                        }
                    </Menu>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;