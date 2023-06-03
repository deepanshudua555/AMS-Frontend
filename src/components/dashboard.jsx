import React from 'react'
import { useEffect } from 'react'
export default function Dashboard() {
  let teacherData = localStorage.getItem('userData')
  teacherData = JSON.parse(teacherData)
  useEffect(() => {
    // getTeacher();
  }, [])

  return (
    <div className="flex items-center border border-solid border-black shadow-xl w-[600px] mt-20 p-5 mx-auto rounded-xl">
      <div className="bg-blue-100 p-5 rounded-xl w-full mr-4">
        <div className="flex flex-col">
          <p className="text-gray-600">Name: </p>
          <p className="text-lg">
            {teacherData.firstName} {teacherData.lastName}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600">Email:</p>{' '}
          <p className="text-lg">{teacherData.email}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600">Designation:</p>
          <p className="text-lg">{teacherData.designation}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600">Teacher id:</p>{' '}
          <p className="text-lg">{teacherData.t_id}</p>
        </div>
      </div>
      <img
        src="/teacheravatar.png"
        className="border border-solid w-44 h-44 rounded-full p-0"
      />
    </div>
  )
}
