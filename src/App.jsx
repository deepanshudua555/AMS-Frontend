import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import StudentLoginAndRegistration from './components/studentLoginAndRegistration';
import TeacherLoginAndRegistration from './components/teacherLoginAndRegistration';
import Timetable from './components/timetable';
import Notices from './components/Notices';
import LeaveState from './Context/leaveState';
import Leave from './components/leaveApplication'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {

  return (
    <>
      <LeaveState>
        <Router>
          <Navbar />
          {/* {alert && <Alert/>} */}
          <Routes>
          <Route path="/" element={<Notices />} />
            <Route path="/studentcreds" element={<StudentLoginAndRegistration />} />
            <Route path="/teachercreds" element={<TeacherLoginAndRegistration />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/timetable" element={<Timetable />} />
          </Routes>
        </Router>

      </LeaveState>
    </>
  );
}

export default App;