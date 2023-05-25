import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import StudentLoginAndRegistration from './components/studentLoginAndRegistration';
import TeacherLoginAndRegistration from './components/teacherLoginAndRegistration';
import Timetable from './components/timetable';
import Notices from './components/notices';
import LeaveState from './Context/leaveState';
import Leave from './components/leaveApplication'
import ActiveLeaves from './components/activeLeaves';
import Letter from './components/letter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Cards from './components/logincards';
function App() {
  const [isLoggedInStud, setStudLogin] = useState(false);
  const [isLoggedInTeach, setTeachLogin] = useState(false);
  
  function handleStudentButtonClick() {
    setStudLogin(true);
    setTeachLogin(false);
    console.log("student was clicked")
  }
  function handleTeacherButtonClick() {
    setStudLogin(false);
    setTeachLogin(true);
    console.log("teacher was clicked")
  }

  return (
    <>
      <LeaveState>
        <Router>
          <Navbar isLoggedInStud={isLoggedInStud} isLoggedInTeach={isLoggedInTeach}/>
          {!isLoggedInStud && !isLoggedInTeach && <Cards onStudButtonClick={handleStudentButtonClick} onTeachButtonClick={handleTeacherButtonClick}/>}
          {/* {alert && <Alert/>} */}
          <Routes>
            <Route path="/" element={<Notices />} />
            <Route path="/studentcreds" element={<StudentLoginAndRegistration />} />
            <Route path="/teachercreds" element={<TeacherLoginAndRegistration />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/leave/activeleaves" element={<ActiveLeaves />} />
            <Route path="/leave/letter" element={<Letter />} />
          </Routes>
        </Router>

      </LeaveState>
    </>
  );
}

export default App;
