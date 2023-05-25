import { useEffect } from 'react';
import React, { useState } from 'react'
import axios from 'axios'




const Bar = () => {
    const [leaves,setLeaves]=useState([]);
    // let leaves;
    const getLeaves=async(event)=>{
        // event.preventDefault();
        const token=localStorage.getItem('token')
        let objectleaves=await axios.get('http://localhost:5000/api/leaveapplication/checkleaves',{
            headers:{
                "auth-token": localStorage.getItem('token')
            }
        })
        setLeaves(objectleaves.data);
        console.log(leaves);

    }
    useEffect(()=>{
        getLeaves();
    },[])
    return (
        <div>

            {
                leaves.map((leave)=>{
                    return (
                    <div className="flex border border-black items-center w-2/3 mx-auto my-10">
                    <img src="/teacheravatar.png" className='w-20'/>
                                 <span className="name">{leave.name}</span>
                                 <ul className="flex ml-auto">
                                     <li><button className='flex bg-blue-400 mr-4 h-8 w-28 items-center justify-center rounded-md border border-black'>View Letter</button></li>
                                     <li><button className='flex bg-green-400 mr-4 h-8 w-20 items-center justify-center rounded-md border border-black'>Approve</button></li>
                                     <li><button className='flex bg-red-400 mr-4 h-8 w-20 items-center justify-center rounded-md border border-black'>Reject</button></li>
                                 </ul>
                         </div>)
                })
            }

        </div>  
    )
}

export default Bar
