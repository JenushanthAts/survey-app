import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateThirdForm } from '../../features/surveySlice';

const ThirdForm = ({ prevStep, nextStep }) => {
    const userColor = useSelector((state) => state.survey.color);
    console.log(userColor)
    const [color, setColor] = useState("" || userColor);
    // const [formValues, setFormValues] = useState({ color: "" || userColor })
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value })
    // }
    const submitFormData = (e) => {
        e.preventDefault();

        console.log(e.target.value)
        if (color.length === 0) {
            setError(true);
        }
        // //   setError(true);
        // // } 
        else {
            // console.log(color)
            dispatch(updateThirdForm({ color: color }))
            nextStep()
            // navigate('/results')

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
                    name="Red"
                    value="Red"
                    onChange={(e) => setColor(e.target.value)}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-labelledby="country-option-1"
                    aria-describedby="country-option-1" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Red
                </label>
            </div>

            <div className="flex items-center mb-4">
                <input type="radio"
                    name="Green"
                    value="Green"
                    onChange={(e) => setColor(e.target.value)}
                    // onChange={handleChange}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Green
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input type="radio"
                    name="Blue"
                    value="Blue"
                    onChange={(e) => setColor(e.target.value)}
                    // onChange={handleChange}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Blue
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input type="radio"
                    name="other"
                    value="other"
                    onChange={(e) => setColor(e.target.value)}
                    // onChange={handleChange}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                    Other
                </label>
            </div>
            {error ? <span className='text-red-500'>Please Select</span> : <></>}
            <div className="flex space-x-2 mt-2">
                <button type="button"
                    className="inline-block
                    px-6 py-2.5 bg-blue-600 text-white 
                    font-medium text-xs leading-tight 
                    uppercase rounded shadow-md hover:bg-blue-700 
                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-blue-800 
                    active:shadow-lg transition duration-150 
                    ease-in-out" onClick={prevStep}>
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

export default ThirdForm