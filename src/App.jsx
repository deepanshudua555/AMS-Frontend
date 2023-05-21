import { useState } from 'react'
import './App.css'
import Header from './components/header'
import LoginAndRegistration from './components/logingAndRegistration';
import Letter from './components/letter';
import Timetable from './components/timetable';
import Notices from './components/Notices';
import LeaveState from './Context/leaveState';
function App() {

  const [lsButton, setShowLogin] = useState(false);
  const [leaveButton, setShowLeave] = useState(false);
  const [attendanceButton, setShowAttendance] = useState(false);
  const [timetableButton, setShowTimetable] = useState(false);


  function handleLeaveButtonClick() {
    setShowLeave(true);
    setShowAttendance(false);
    setShowTimetable(false);
    setShowLogin(false);
  }

  function handleAttendanceButtonClick() {
    setShowLeave(false);
    setShowAttendance(true);
    setShowTimetable(false);
    setShowLogin(false);
  }

  function handleTimetableButtonClick() {
    setShowLeave(false);
    setShowAttendance(false);
    setShowTimetable(true);
    setShowLogin(false);
  }

  function handleLoginButtonClick() {
    setShowLeave(false);
    setShowAttendance(false);
    setShowTimetable(false);
    setShowLogin(true);
  }


  return (
    <>
      <LeaveState>
        <Header
          lsButton={lsButton} onLoginButtonClick={handleLoginButtonClick}
          leaveButton={leaveButton} onLeaveButtonClick={handleLeaveButtonClick}
          attendanceButton={attendanceButton} onAttendanceButtonClick={handleAttendanceButtonClick}
          timetableButton={timetableButton} onTimetableButtonClick={handleTimetableButtonClick}
        />
        {(!lsButton && !leaveButton && !attendanceButton && !timetableButton) ? <Notices /> : null}
        {(lsButton && !leaveButton && !attendanceButton && !timetableButton) ? <LoginAndRegistration /> : null}
        {(!lsButton && leaveButton && !attendanceButton && !timetableButton) ? <Letter /> : null}
        {(!lsButton && !leaveButton && attendanceButton && !timetableButton) ? <LoginAndRegistration /> : null}
        {(!lsButton && !leaveButton && !attendanceButton && timetableButton) ? <Timetable /> : null}
      </LeaveState>
    </>
  )
}

export default App
