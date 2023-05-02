
export default function Header (props) {
    return (
        <>

            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://bpitindia.com/" className="flex items-center">
                        <img src="/bpit-logo.jpeg" className="h-20 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Bhagwan parshuram institute of Technology</span>
                    </a>
                    {!props.showLoginRegisterButton && (
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full" onClick={props.onLoginButtonClick}>
                            <span>Login/Register</span>
                        </button>
                    )}    
                </div>
            </nav>

        </>
    )
}