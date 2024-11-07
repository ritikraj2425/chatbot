'use client'

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';


export default function Main() {
    const [list, setList] = useState(["Hii", "How, I can help you today?"]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
    const [token, setToken] = useState(false);
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            setToken(true);
        }
    }, [])


    const fetchGeminiApi = async () => {
        try{const data = {
            contents: [
                {
                    parts: [
                        {
                            text: input
                        }
                    ]
                }
            ]
        };
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAEmwbBG1TCnsaq7n5eA1DGolf6MZPORYk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        });
        if (!response.ok) {
            setList((prevList) => [...prevList, "Error in generating"])
        }
        const result = await response.json();
        const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (generatedText) {
            setList((prevList) => [...prevList, generatedText]);
        }}catch(err){
            setList((prevList) => [...prevList, "Internal Error"])
            console.log(err);
        }

    }

    const handleButtonClick = () => {
        if (input.trim() !== '') {
            setList((prevList) => [...prevList, input]);
            setInput('');
            fetchGeminiApi();
        }

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleButtonClick();
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [list]);

    return (
        <>
            {
                !token ?

                    <div className="w-full min-h-screen relative mb-5 ">
                        <div className="h-80 w-80 bg-[#FFE419] rounded-full absolute" style={{
                            animation: "bounce-slow-down 5s ease-out forwards",
                        }}>
                        </div>
                        <div className="md:w-[85%] md:h-[85%] h-[73%] w-[90%] bg-[#FFDEFE] absolute right-0 md:bottom-0 md:mr-8 shadow-md rounded-xl">
                            
                            <div className=" p-3 mb-2 rounded-lg shadow-sm text-gray-800 ">
                                <span className="bg-[#f4f2f2] p-2 rounded-md">
                                Sorry</span>
                            </div>
                            <div></div>
                            <div className=" p-3 mb-2 ml-auto rounded-lg shadow-sm text-gray-800 ">
                            <span className="bg-blue-100 p-2 rounded-md">
                            You need to signin first
                            </span>
                            </div>

                        </div>

                    </div>


                    :

                    <div className="w-full min-h-screen relative mb-5 ">
                        <div className="h-80 w-80 bg-[#FFE419] rounded-full absolute" style={{
                            animation: "bounce-slow-down 5s ease-out forwards",
                        }}>
                        </div>
                        <div className="md:w-[85%] md:h-[85%] h-[73%] w-[90%] bg-[#FFDEFE] absolute right-0 md:bottom-0 md:mr-8 shadow-md rounded-xl">
                            <div className="flex-grow p-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 70px)' }}>
                                {list.map((item, index) => (
                                    <div key={index} className="flex">
                                        {index % 2 === 0 ? (
                                            <div className="bg-[#f4f2f2] p-3 mb-2 rounded-lg shadow-sm text-gray-800 max-w-[75%]">
                                                <ReactMarkdown>
                                                    {item}
                                                </ReactMarkdown>
                                            </div>
                                        ) : (
                                            <div className="bg-blue-100 p-3 mb-2 ml-auto rounded-lg shadow-sm text-gray-800 max-w-[75%]">
                                                <ReactMarkdown>
                                                    {item}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div ref={messagesEndRef} />
                            </div>

                            <div className="flex">
                                <input
                                    onChange={(e) => { setInput(e.target.value) }}
                                    type="text"
                                    onKeyDown={(e) => { handleKeyPress(e) }}
                                    value={input}
                                    placeholder="Type a message..."
                                    className="absolute w-[90%] h-[8%] rounded-full bottom-0 mb-3 bg-gray-100 p-3 md:ml-8 ml-3 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none"
                                />
                                <button onClick={handleButtonClick} className="absolute right-8 bottom-4 bg-lime-300 p-2 text-gray-600 rounded-xl">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
            }


        </>
    )
}
