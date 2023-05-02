
export default function Header (props) {
    return (
        <>
            <nav className="py-4 px-2 mx-10 items-center relative">
                
                <a href="https://bpitindia.com/" className="flex items-center justify-center">
                    <img src="/bpit-logo.jpeg" className="h-10 mr-3" alt="bpit logo" />
                    <span className="text-xl font-semibold text-gray-800">Bhagwan parshuram institute of Technology</span>
                </a>
                
                <div className="flex mx-auto mt-4">
                    <div className="flex justify-around pl-2">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 py-2 border-2 rounded-full px-2 w-32">Leave</button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 py-2 border-2 rounded-full px-2 w-32 ml-4">Attendance</button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 py-2 border-2 rounded-full px-2 w-32 ml-4">Time-Table</button>
                    </div>
                   
                    {!props.showLoginRegisterButton && (
                        <button className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-2 border-2 rounded-full absolute right-2" onClick={props.onLoginButtonClick}>
                            <span>Login/Register</span>
                        </button>
                    )}    
                </div>
                <hr className="border border-gray-600 mt-4"/>
            </nav>
        </>
    )
}