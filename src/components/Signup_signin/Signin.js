import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from '../context/ContextProvider';

const Signin = () => {

    const [logdata, setData] =  useState({
        email:"",
        password:""
    });
    // console.log(logdata);

    const { account, setAccount } = useContext(Logincontext);


    const adddata = (e)=>{
        const {name, value} = e.target;

        setData(()=>{
            return{
                ...logdata,
                [name]:value,
            }
        })
    }


    const senddata = async(e)=>{
        e.preventDefault();

        const {email, password} = logdata;

        const res = await fetch("https://food-0t4k.onrender.com/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 400 || !data){
            console.log("invalid details");
            toast.warning("invalid input field",{
                position: "top-center",
            });
        }else{
            console.log("data valid");
            setAccount(data)
            toast.success("Login successfully",{
                position: "top-center",
            });
            setData({...logdata, email:"", password:""});
        }
    }


    return (
        <section>
            <div className="sign_container">
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={logdata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={logdata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn"
                         onClick={senddata}
                        >Continue</button>
                    </form>
                    <ToastContainer />
                </div>
                <div className="create_accountinfo">
                    <p>New to Food?</p>
                    <button>  <NavLink to="/register">Create your Food Account</NavLink></button>
                </div>
            </div>

        </section>
    );
};

export default Signin;