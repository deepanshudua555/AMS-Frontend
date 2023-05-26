import Bar from './activeLeavesBar'
import { useEffect } from 'react'
import React, { useState } from 'react'
import axios from 'axios'

export default function ActiveLeaves() {
  const [leaves, setLeaves] = useState([])
  // let leaves;
  const getLeaves = async (event) => {
    // event.preventDefault();
    const token = localStorage.getItem('token')
    let objectleaves = await axios.get(
      'http://localhost:5000/api/leaveapplication/checkleaves',
      {
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      }
    )
    setLeaves(objectleaves.data)
    console.log(leaves)
  }
  useEffect(() => {
    getLeaves()
  }, [])
  return (
    <div>
      {leaves.map((leave) => {
        <Bar name={leave.name}/>
      })}
    </div>
  )
}
