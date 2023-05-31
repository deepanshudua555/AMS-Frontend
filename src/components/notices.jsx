import React from 'react'
import { useState } from 'react'
import Cards from './logincards'
import { useContext } from 'react'
import leaveContext from '../Context/leaveContext'

export default function Notices() {
  //   const contextData = useContext(leaveContext);
  //   const { setTeacher, setStudent, teacher, student } = contextData;

  // const [isLoggedInStud, setStudLogin] = useState(false);
  // const [isLoggedInTeach, setTeachLogin] = useState(false);
  function handleStudentButtonClick() {
    // setTeacher(false);
    // setStudent(true);
    // localStorage.setItem('user','student');
  }
  function handleTeacherButtonClick() {
    // setTeacher(true);
    // setStudent(false);
    // localStorage.setItem('user','teacher');
  }
  const user = localStorage.getItem('user')
  return (
    // !isLoggedInStud && !isLoggedInTeach &&
    <>
      {user === null ? (
        <Cards
          onStudButtonClick={handleStudentButtonClick}
          onTeachButtonClick={handleTeacherButtonClick}
        />
      ) : (
        <div>Notices</div>
      )}
    </>
  )
}
