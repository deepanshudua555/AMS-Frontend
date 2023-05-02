import React, { useState } from 'react'
import './App.css'
import Header from './components/header'
import LoginAndRegistration from './components/logingAndRegistration';

function App() {
  const [showLoginRegisterButton, setShowLogin] = useState(false);

  function handleLoginButtonClick () {
    setShowLogin(true);
  }

  return (
    <>
      <Header showLoginRegisterButton={showLoginRegisterButton}  onLoginButtonClick={handleLoginButtonClick}/>
      {showLoginRegisterButton ? <LoginAndRegistration /> : null}
    </>
  )
}

export default App
