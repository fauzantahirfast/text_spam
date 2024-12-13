import React, { useState } from 'react';
import "./css/app.css";

const App = () => {
    const [input, setInput] = useState(""); // State for user input
    const [response, setResponse] = useState({}); // State for server response

    // Function to send data to the backend
    const sendData = async () => {
        const payload = { data: input }; // Wrap input into an object

        try {
            const response = await fetch('https://testimg-1003428275800.asia-south2.run.app/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // Convert payload to JSON
            });

            const result = await response.json();
            setResponse(result); // Store the entire response object
            console.log('Response from Flask:', result);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <>
            <div className='container-fluid p-0'>
                {/* Navigation Bar */}
                <nav className="navbar navbar-dark bg-dark p-2">
                    <a className="navbar-brand" href="#">Email Spam Classifier</a>
                </nav>

                {/* Main Container */}
                <div className="container mt-5">
                    {/* Header Section */}
                    <div className="row justify-content-start fs-1">
                        <div className="col-6">
                            <div className="text-black" style={{ fontWeight: "600" }}>Email Spam Checker</div>
                        </div>
                    </div>

                    {/* Textarea Input */}
                    <div className="row justify-content-start fs-4 mt-3">
                        <div className="col-6">
                            <textarea 
                                type="text" 
                                className='w-100' 
                                placeholder="Enter text here..." 
                                onChange={(e) => setInput(e.target.value)} 
                                value={input}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="row justify-content-start fs-5 mt-3">
                        <div className="col-2">
                            <button 
                                className='bg-dark text-white rounded' 
                                onClick={sendData}
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Display Classified Data */}
                    <div className="row justify-content-start fs-5 mt-3">
                        <div className="col-6">
                            <h4 className='text-dark'>
                                {response["Classified data"] ? `Classified Result: ${response["Classified data"]}` : ""}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
