import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
export default function Dashboard() {

  let teacherData = localStorage.getItem('userData');
  teacherData = JSON.parse(teacherData);
  useEffect(() => {
    // getTeacher();
  }, [])

  return (
    <div>
      Hello { teacherData.firstName }
      <br />
      Your teacher id : {teacherData.t_id}
    </div>
  )
}
