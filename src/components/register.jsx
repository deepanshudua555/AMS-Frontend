import React, { useState } from 'react';

export default function Register(props) {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one digit, one lowercase letter, one uppercase letter, and one special character.");
    } else {
      setPasswordError("");
    }
  }

  function handleConfirmPasswordChange(event) {
      const value = event.target.value;
      setConfirmPassword(value);
      if (!validateConfirmPassword(value)) {
        setConfirmPasswordError("Password doesn't match");
      } else {
        setConfirmPasswordError("");
      }
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/;
    return passwordRegex.test(password);
  }

  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validatePassword(password)) {
      // Submit the form
    } else {
      setPasswordError("Password is invalid");
    }
    if (validateConfirmPassword(confirmPassword)) {

    } else {
      setConfirmPasswordError("Confirm password doesn't match")
    }
  }
  return (
    <>
      <div className="mt-10 flex min-h-full flex-1 flex-col justify-center px-6 pb-10 lg:px-8 border-2 border-blue-500/50 w-[600px] mx-auto shadow-xl rounded-md">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                />
                {passwordError && <div className="text-red-500">{passwordError}</div>}
              </div>
              <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mt-3">
                    Confirm Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                    />
                </div>
                {confirmPasswordError && <div className="text-red-500">{confirmPasswordError}</div>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}