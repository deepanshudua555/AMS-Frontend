import React from "react";
import Letter from "./letter";
import ActiveLeaves from "./activeLeaves";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



export default function LeaveApplication() {
  return (
    <div>
      <div>
          <ul className="flex justify-evenly w-1/2 mx-auto">
            <Link to="/leave/activeleaves">
              <li className="flex justify-center border border-black rounded-md p-2">
              Active Leaves
            </li>
            </Link>
            <Link to="/leave/letter">
              <li className="flex justify-center border border-black rounded-md p-2 w-32">
              Letter
            </li>
            </Link>
          </ul>
      </div>
    
    </div>
  );
}
