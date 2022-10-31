import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const SecondPage = () => {
    const savedEmail = localStorage.getItem("email");
    const initialEmail = JSON.parse(savedEmail);
    const [formValues, setFormValues] = useState({ email: initialEmail || "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { state } = useLocation();
    let tempObjPg2 = {};

    useEffect(() => {
        localStorage.setItem("email", JSON.stringify(formValues.email))
    }, [formValues.email]);
    const isValidEmail = (val) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setError(null)
        setFormValues(prevState => {
            return { ...prevState, [name]: value }
        })

    }
    const submitFormData = (e) => {
        e.preventDefault();
        tempObjPg2 = { ...state, email: formValues.email }

        if (!isValidEmail(formValues.email)) {
            setError('Email is invalid')
        }
        else {

            navigate("/thirdPage", { state: tempObjPg2 })
            // dispatch(updateSecondForm({ email: formValues.email }))
        }
    }

    return (
        <div className="container mt-10 h-48 px-4" >
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your Email ?
                </label>
                <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-base
                           font-normal
                           text-gray-700
                           bg-white bg-clip-padding
                           border border-solid border-gray-300
                           rounded transition ease-in-out
                           m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    // id="exampleFormControlInput1"
                    placeholder="What is your email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    style={{ border: error ? '1px solid red' : "1px solid gray" }}
                />

            </div>
            {error ? <span className='text-red-500'>{error}</span> : <></>}

            <div className="flex space-x-2 mt-2">
                <button type="button"
                    className="inline-block
                        px-6 py-2.5 bg-blue-600 text-white 
                        font-medium text-xs leading-tight 
                        uppercase rounded shadow-md hover:bg-blue-700 
                        hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                        focus:outline-none focus:ring-0 active:bg-blue-800 
                        active:shadow-lg transition duration-150 
                        ease-in-out" onClick={() => navigate("/")} >
                    Previous
                </button>
                <button type="submit"
                    className="inline-block
                        px-6 py-2.5 bg-blue-600 text-white 
                        font-medium text-xs leading-tight 
                        uppercase rounded shadow-md hover:bg-blue-700 
                        hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                        focus:outline-none focus:ring-0 active:bg-blue-800 
                        active:shadow-lg transition duration-150 
                        ease-in-out"
                    onClick={submitFormData}
                >Next</button>
            </div>
        </div>
    )
}

export default SecondPage