import React, { useState } from "react";
import './letter.css';
import { useContext } from "react";
import leaveContext from "../Context/leaveContext";

const Letter = () => {
    const contextData = useContext(leaveContext);
    const{addLeaveAppln} = contextData;

    const [isEditable, setIsEditable] = useState(false);
    const [data, setData] = useState({
        from: "",
        to:"",
        till: "",
        subject: "",
        days: "",
        startDate: "",
        endDate: "",
        reason: ""
    });
     
    const handleEditSaveButton = () => {
        setIsEditable(!isEditable);
    };

    const handleSendButton = () => {
        // const jsonData = JSON.stringify(data);i
        console.log(data.subject.length)
        console.log(data.reason.length)
        if ((data.subject.length > 5) && (data.reason.length > 11)) {
            addLeaveAppln(data);
        } else {
            alert("not enough content")
        }
    };

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className="w-1/2 mx-auto mt-10 border-2 border-gray-500 p-10 bg-yellow-100 relative">
                <div
                    className="absolute top-0 left-0 right-0 h-8 bg-white text-center text-sm leading-8 font-semibold"
                    style={{ transform: "translateY(-50%)" }}
                >
                    {isEditable ? "Edit Mode" : "View Mode"}
                </div>
                <div
                    className={`w-full h-full pb-10 pr-10 overflow-auto ${
                    isEditable ? "bg-white" : ""
                    }`}
                    contentEditable={isEditable}
                >
                    <div className="text-center mb-8">
                        <div className="inline-block w-16 h-1 bg-gray-500 mb-2"></div>
                        <div className="uppercase tracking-widest text-lg font-semibold">
                            Leave Application
                        </div>
                        <div className="inline-block w-16 h-1 bg-gray-500 mt-2"></div>
                    </div>
                    <div className="content">
                        <p><span className="font-semibold">From:</span>{" "}
                            <input
                                type="text"
                                name="from"
                                value={data.from}
                                onChange={handleChange}
                                className={`${isEditable ? "" : "border bg-transparent"}`}
                            />
                        </p>
                        <p><span className="font-semibold">To:</span>{" "}
                            <input
                                type="text"
                                name="to"
                                value={data.to}
                                onChange={handleChange}
                                className={`${isEditable ? "" : "border bg-transparent"}`}
                            />
                        </p>
                        <p>
                            <span className="font-semibold">Subject:</span>{" "}
                            <input
                                type="text"
                                name="subject"
                                value={data.subject}
                                onChange={handleChange}
                                className={`${isEditable ? "" : "border bg-transparent"}`}
                            />
                        </p>
                        <br />
                        <p>
                            Dear Sir/Madam,
                        </p>
                        <br />
                        <p>
                            I am writing this letter to inform you that I will be taking leave
                            from work for{" "}
                            <span className="underline">
                                <input
                                    type="text"
                                    name="days"
                                    value={data.days}
                                    onChange={handleChange}
                                    className={`${isEditable ? "" : "border bg-transparent"}`}
                                />
                            </span>
                            days, starting from{" "}
                            <span>
                            <input
                                type="text"
                                name="startDate"
                                value={data.startDate}
                                onChange={handleChange}
                                className={`${isEditable ? "" : "border bg-transparent"}`}
                            />
                            </span>     
                            to {""}
                            <span>
                                <input
                                    type="text"
                                    name="endDate"
                                    value={data.endDate}
                                    onChange={handleChange}
                                    className={`${isEditable ? "" : "border bg-transparent"}`}
                                />
                            </span>.
                        </p>
                        <p>The reason for my leave is {""}
                        <span>
                            <input
                                type="text"
                                name="reason"
                                value={data.reason}
                                onChange={handleChange}
                                className={`${isEditable ? "" : "border bg-transparent"}`}
                            />
                        </span>.</p>
                        <br />
                        <p>
                            Please let me know if there is anything I need to do before I leave,
                            or if there is anything you need me to prepare for while I am away.
                        </p>
                        <br />
                        <p>Thank you for your understanding.</p>
                        <br />
                        <p>Sincerely,</p>
                        <p>Your Name</p>
                    </div>
                </div>
            </div>
            <button
                className="absolute bottom-0 right-0 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handleEditSaveButton}
            >
                {isEditable ? "Save" : "Edit"}
            </button>
            <button
                className="absolute bottom-0 right-20 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handleSendButton}
            >
                Send
            </button>
        </>
    );
};

export default Letter;
