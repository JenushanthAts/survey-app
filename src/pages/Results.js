import React, { } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Results = () => {
    const name = useSelector((state) => state.survey.name);
    const country = useSelector((state) => state.survey.country);
    const temperature = useSelector((state) => state.survey.temperature);
    const email = useSelector((state) => state.survey.email);
    const color = useSelector((state) => state.survey.color);
    const navigate = useNavigate();
    // useEffect(() => {
    //     dispatch(reset({ name: " ", country: "" }))
    // }, [])
    const handleClick = () => {
        navigate("/")
    }
    return (
        <div className='container mt-10 h-48 pl-10'>

            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your Name ?
                </label>

            </div>
            <div className="mb-3  w-auto border-b-4">

                <span>{name}</span>
                {/* <span>hiiiii</span> */}
            </div>
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your Country ?
                </label>

            </div>
            <div className="mb-3  w-auto border-b-4">
                {/* <span>hiiiii</span> */}
                <span>{country}</span>
            </div>
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your email ?
                </label>

            </div>
            <div className="mb-3  w-auto border-b-4">
                <span>{email}</span>
                {/* <span>hiii</span> */}
            </div>
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your favourite color ?
                </label>

            </div>
            <div className="mb-3  w-auto">
                <span>{color}</span>
                {/* <span>hiii</span> */}
            </div>
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    Temperature of the Capital ?
                </label>

            </div>
            <div className="  w-auto">
                <span>{temperature} <sup>o</sup> C</span>
                {/* <span>hiii</span> */}
            </div>
            <button type="button"
                className="inline-block
                    px-6 py-3 bg-blue-600 text-white 
                    font-medium text-xs leading-tight 
                    uppercase rounded shadow-md hover:bg-blue-700 
                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-blue-800 
                    active:shadow-lg transition duration-150 
                    ease-in-out"
                onClick={handleClick}>Move to Back</button>
        </div>
    )
}

export default Results