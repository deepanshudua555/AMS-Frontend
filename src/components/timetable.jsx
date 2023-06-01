import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Timetable = () => {

  const [data,setData]=useState([])

  const getTimeTable=async(event)=>{
    const user=JSON.parse(localStorage.getItem('userData'))
    console.log(user.classs,user.section,user.year)
    const tt=await axios.get('http://localhost:5000/api/timetable',
    {
      params:{
      "classs":user.classs,
      "section":user.section,
      "year":user.year
      }
    },
    {
      headers:{
        "auth-token": localStorage.getItem('token')
      }
    })
    console.log(tt.data.days.mon)
    setData(tt.data.days)//timetable is here
  }


  useEffect(()=>{
    getTimeTable();
  },[])

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const times = [
    '9:30',
    '10:20',
    '11:10',
    '12:00',
    'BREAK',
    '13:40',
    '14:30',
    '15:20',
    '16:10',
    '17:00',
  ]

  // const periods=[
  //   1,2,3,4,5,6,7,8,9
  // ]

  const breakColBorder = (time, day) => {
    let border = 'border border-gray-500'
    if (time === 'BREAK') {
      if (day != 'Monday' || day != 'Sunday') {
        border = 'border-x border-gray-500 bg-blue-200'
      }
    }
    return border
  }

  const rowStyle = (day) => {
    if (['Monday', 'Wednesday', 'Friday', 'Sunday'].includes(day)) {
      return 'bg-blue-200'
    }
    return ''
  }

  const yearOpt = ['1st', '2nd', '3rd', '4th']
  const [selectedYrOpt, setSelectedYrOpt] = useState('')
  const branchOpt = ['CSE', 'IT', 'ECE', 'EEE']
  const [selectedBrnchOpt, setSelectedBrnchOpt] = useState('')
  const sectionOpt = ['A', 'B', 'C']
  const [selectedSectOpt, setSelectedSectOpt] = useState('')

  const handleSelectYrChange = (event) => {
    setSelectedYrOpt(event.target.value)
  }
  const handleSelectBrnchChange = (event) => {
    setSelectedBrnchOpt(event.target.value)
  }
  const handleSelectSectChange = (event) => {
    setSelectedSectOpt(event.target.value)
  }

  const tt={

  }

  return (
    <div className="flex flex-col items-center">
      <table className="border-collapse border border-gray-500 mx-auto m-24 w-3/4 h-96">
        <thead>
          <tr>
            <th className="border border-gray-500"></th>
            {times.map((time) => (
              <th
                key={time}
                className="border border-gray-500 text-center font-semibold w-32"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day} className={rowStyle(day)}>
              <td className="border border-gray-500 text-center font-semibold w-40">
                {day}
              </td>
              {
                times.map((time,p) => (
                <td
                  key={`${day}-${time}`}
                  className={breakColBorder(time, day)}
                >
                  
                  {/* {${data.${day}}.map((d)=>{
                    {p}
                  })} */}
                  
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-96 justify-between">
        <select value={selectedYrOpt} onChange={handleSelectYrChange}>
          <option value="">Year</option>
          {yearOpt.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>

        <select value={selectedBrnchOpt} onChange={handleSelectBrnchChange}>
          <option value="">Branch</option>
          {branchOpt.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <select value={selectedSectOpt} onChange={handleSelectSectChange}>
          <option value="">Section</option>
          {sectionOpt.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Timetable
