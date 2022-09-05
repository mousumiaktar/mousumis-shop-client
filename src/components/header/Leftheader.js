import React, { useContext } from 'react';
import  { Avatar,Divider }  from '@mui/material';
import { Logincontext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import './leftheader.css';

const Leftheader = ({logClose}) => {

    const { account, setAccount } = useContext(Logincontext);

    return (
        <>
            <div className="leftheader">
                <div className="left_nav">
                    {
                        account ?
                            <Avatar className='avatar2'>{account.fname[0].toUpperCase()}</Avatar>
                            :
                            <Avatar className='avatar'></Avatar>
                    }
                    {
                        account ? <h3>Hi! {account.fname.toUpperCase()}</h3> : ""
                    }
                </div>
                <div className="nav_btn" onClick={()=>logClose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Order by category</NavLink>
                    <Divider style={{ width: "100%", marginLeft: -20 }} />
                    {
                        account ? <NavLink to="/buynow">Your Orders</NavLink> :
                        <NavLink to="/login">Your Orders</NavLink>
                    }
                </div>
            </div>
        </>
    );
};

export default Leftheader;