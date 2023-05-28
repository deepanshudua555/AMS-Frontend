import React from 'react'
import Letter from './letter'
// import ActiveLeaves from "./activeLeaves";
import ActiveLeaves from './activeLeaves'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function LeaveApplication() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(true)
  }
  const handleLetter = () => {
    setActive(false)
  }
  return (
    <div className="w-4/5 mx-auto">
      <div>
        <ul className="flex justify-evenly w-1/2 mx-auto">
          <button onClick={handleActive}>
            {/* <Link to="/leave/activeleaves"> */}
            <li
              className={`  ${
                active === true ? 'bg-sky-600' : ''
              } flex justify-center border border-black rounded-md p-2 w-32`}
            >
              Active Leaves
            </li>
          </button>
          <button onClick={handleLetter}>
            {/* </Link> */}
            {/* <Link to="/leave/letter"> */}
            <li
              className={`  ${
                active === false ? 'bg-sky-600' : ''
              } flex justify-center border border-black rounded-md p-2 w-32`}
            >
              Letter
            </li>
            {/* </Link> */}
          </button>
        </ul>
      </div>
      {active === true ? <ActiveLeaves /> : <Letter />}
    </div>
  )
}
