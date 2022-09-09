import React, { useContext } from 'react';
import { Logincontext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deletedata,get}) => {

    const { account, setAccount } = useContext(Logincontext);


    const removedata = async(req,res)=>{
        try {
            const res = await fetch(`/remove/${deletedata}`, {
                method:"DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
    
            const data = await res.json();
            console.log(data);
    
            if(res.status === 400 || !data){
                console.log("error");
            }else{
                console.log("user delete");
                setAccount(data);
                toast.success("This item is deleted",{
                    position: "top-center",
                });
                get();
            }
            
        } catch (error) {
            console.log("error");
        }
    }

    return (
        <div className="add_remove_select">
            <p style={{ cursor: "pointer"}} onClick={()=>removedata(deletedata)}>Delete</p>
            <ToastContainer />
        </div>
    );
};

export default Option;