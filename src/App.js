import React, { useState, useEffect } from 'react';
import "./css/app.css";

const App = () => {
    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")
    const sendData = async () => {
       	const payload = {data: input};
        try {
            const response = await fetch('https://testimg-1003428275800.asia-south2.run.app/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            setResponse(result)
            console.log('Response from Flask:', result);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }
    return (
        <>
            <div className='container-fluid p-0'>
                <nav className="navbar navbar-dark bg-dark p-2">
                    <a className="navbar-brand" href="#">Email Spam Classifier</a>
                </nav>

                <div className="container mt-5">
                    <div className="row justify-content-start fs-1">
                        <div className="col-6">
                            <div className="text-black" style={{ fontWeight: "600" }}>Email Spam Checker</div>
                        </div>
                    </div>
                    <div className="row justify-content-start fs-4 mt-3">
                        <div className="col-6">
                            <textarea type="text" className='w-100' onChange={(e)=> setInput(e.target.value)}/>
                        </div>
					</div>
					<div className="row justify-content-start fs-5 mt-3">
                        <div className="col-2" >
                            <button className='bg-dark text-white rounded' onClick={sendData}>Submit</button>
                        </div>
                    </div>
                    <div className="row justify-content-start fs-5 mt-3">
                        <div className="col-2" >
                            <h4 className='text-dark'>{response["Classified data"]}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
