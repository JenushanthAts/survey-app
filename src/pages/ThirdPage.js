import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateForm } from '../features/surveySlice';

const ThirdPage = () => {
    const savedColor = localStorage.getItem("color");
    const initialColor = JSON.parse(savedColor);
    const [color, setColor] = useState(initialColor || "");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    let tempObj3 = {};

    useEffect(() => {
        localStorage.setItem("color", JSON.stringify(color));
    }, [color]);
    const handleChange = (e) => {
        const { value } = e.target;
        setError(null)
        setColor(value)

    }
    const submitFormData = (e) => {
        // console.time();
        e.preventDefault();
        if (color.length === 0) {
            setError("Field Cannot be empty")
        }
        else {
            setError(null)
            tempObj3 = { ...state, color: color }
            console.log(tempObj3)
            dispatch(updateForm(tempObj3))

            //remove all items from localstorage
            for (const key in tempObj3) {
                localStorage.removeItem(`${key}`)
            }

            navigate('/results',);
            // console.timeEnd()
        }

    }
    return (
        <div className="container mt-10 h-48 px-4">
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your favourite color ?
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input id="country-option-1"
                    type="radio"
                    name="color"
                    value="Red"
                    onChange={handleChange}
                    checked={color === "Red"}
                    // onChange={(e) => setColor(e.target.value)}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-labelledby="country-option-1"
                    aria-describedby="country-option-1" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Red
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input type="radio"
                    name="color"
                    value="Green"
                    checked={color === "Green"}
                    // onChange={(e) => setColor(e.target.value)}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Green
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input type="radio"
                    name="color"
                    value="Blue"
                    checked={color === "Blue"}
                    // onChange={(e) => setColor(e.target.value)}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Blue
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input type="radio"
                    name="color"
                    value="Other"
                    checked={color === "Other"}
                    // onChange={(e) => setColor(e.target.value)}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Other
                </label>
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
                    ease-in-out" onClick={() => navigate("/secondPage")}>
                    Previous
                </button>
                <button type="button"
                    className="inline-block
                    px-6 py-2.5 bg-blue-600 text-white 
                    font-medium text-xs leading-tight 
                    uppercase rounded shadow-md hover:bg-blue-700 
                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-blue-800 
                    active:shadow-lg transition duration-150 
                    ease-in-out"
                    onClick={submitFormData}>Submit</button>
            </div>

        </div>
    )
}

export default ThirdPage