import leaveContext from "./leaveContext";
import axios from 'axios';
// import React from 'react'

export default function LeaveState({ children }) {


    const addLeaveAppln = async (leaveAppln) => {
                
            localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1MmIxZWQ2NmUyMDVhNjhlMzVlMWU5In0sImlhdCI6MTY4MzE0MTEwMX0.1HIU3Z0CjEgp2tmwuosEDlO319XJXIPMVEo-t8HSkng')

        const body = {
            sub:leaveAppln.subject,
            desc:leaveAppln.reason,
            t_id:34243242,
            startDate:leaveAppln.startDate,
            endDate:leaveAppln.endDate,
        }
        console.log(body);
        // eslint-disable-next-line
        const response = await axios.post('http://localhost:5000/api/leaveapplication/addleave',
            body
            , {
                headers: {
                    "auth-token": localStorage.getItem('token')
                }
            })
        console.log("Note added");
    }
    return (
        <leaveContext.Provider value={{addLeaveAppln}}>
            {children}
        </leaveContext.Provider>
    )
}


