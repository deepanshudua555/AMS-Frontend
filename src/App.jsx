import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import StudentLoginAndRegistration from './components/studentLoginAndRegistration'
import TeacherLoginAndRegistration from './components/teacherLoginAndRegistration'
import Timetable from './components/timetable'
import Notices from './components/notices'
import LeaveState from './Context/leaveState'
import Leave from './components/leaveApplication'
// import ActiveLeaves from './components/activeLeaves'
// import Letter from './components/letter'
// import { useContext } from 'react'
// import leaveContext from './Context/leaveContext'
import Dashboard from './components/dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom'

function App() {
  // const contextData = useContext(leaveContext);
  // const{setTeacher,setStudent} = contextData;
  // localStorage.clear();
  return (
    <>
      <LeaveState>
        <Router>
          {/* isLoggedInStud={isLoggedInStud} isLoggedInTeach={isLoggedInTeach} */}
          <Navbar />

          {/* {alert && <Alert/>} */}
          <Routes>
            <Route path="/" element={<Notices />} />
            <Route
              path="/studentcreds"
              element={<StudentLoginAndRegistration />}
            />
            <Route
              path="/teachercreds"
              element={<TeacherLoginAndRegistration />}
            />
            <Route path="/leave" element={<Leave />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/dashboard" element={<Dashboard />} />

            
          </Routes>
        </Router>
      </LeaveState>
    </>
  )
}

export default App
