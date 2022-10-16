import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { updateFirstForm } from '../../features/surveySlice';
import weatherApi from '../../common/api/weatherApi';
import { APIKey } from '../../common/api/apiKey';
import validator from "validator";
const FirstForm = ({ nextStep }) => {
    const name = useSelector((state) => state.survey.name);
    const userCountry = useSelector((state) => state.survey.country);
    const countryTemperature = useSelector((state) => state.survey.temperature);
    const initialValues = { userName: "" || name, country: "" || userCountry, temperature: "" || countryTemperature };
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState(false);
    const [countries, setCountries] = useState([]);
    const [location, setLocation] = useState('');


    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await axios.get("https://restcountries.com/v2/all");
                // console.log(res)
                setCountries(res.data);
                return res
            } catch (err) {
                console.log(err)
            }

        };
        if (location) {
            const fetchWeather = async () => {
                try {

                    const res = await weatherApi.get(`?q=${location}&appid=${APIKey}`)
                    const temp = parseInt(((res.data.main.temp) - 32) / 1.8);
                    setFormValues({ ...formValues, temperature: temp })
                } catch (err) {
                    console.log(err)
                }
            }
            fetchWeather();
        }


        fetchCountries();

    }, [countries, location, formValues])

    const getCapitalCity = async (value) => {
        const res = countries.find(e => e.name === value);
        setLocation(res.capital)
    }
    const handleChange = (e) => {

        const { name, value } = e.target;
        if (name === "country") {
            getCapitalCity(value)
        }
        setFormValues({ ...formValues, [name]: value })
        // console.log(firstFormValues)
    }

    const submitFormData = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        // validator.isEmpty(formValues.country)
        if (validator.isEmpty(formValues.userName)) {
            setError(true);
        }

        else {
            dispatch(updateFirstForm({ name: formValues.userName, country: formValues.country, temperature: formValues.temperature }));
            nextStep();
        }

    }

    // const validate = (values) => {
    //     const errors = {}
    //     // console.log(values)
    //     if (!values.userName) {
    //         errors.userName = "Name must contain at least your first name and last name";
    //         // set(false);
    //     }
    //     if (!values.country) {
    //         errors.country = "Country cannot be empty";
    //         // setValid(false);
    //     }
    //     return errors;
    // }


    return (
        <div className="container mt-10 h-48 px-4" >
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your Name ?
                </label>
                <input
                    type="text"
                    name="userName"
                    className="form-control block w-full px-3 py-1.5 text-base
                           font-normal
                           text-gray-700
                           bg-white bg-clip-padding
                           border border-solid border-gray-300
                           rounded transition ease-in-out
                           m-0 focus:text-gray-700 focus:bg-white 
                           focus:border-blue-600 focus:outline-none"
                    // id="exampleFormControlInput1"
                    value={formValues.userName}
                    onChange={handleChange}
                    placeholder="What is your Name"
                    style={{ border: error && formValues.userName.length <= 0 ? '1px solid red' : "1px solid gray" }}
                />
                {error ? <p className='text-red-500 py-2'>Name must contain at least your first name and last name</p> : <></>}
            </div>
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your Country ?
                </label>
                {/* <input
                    type="text"
                    name='country'

                    className="form-control block w-full px-3 
                             py-1.5 text-base
                           font-normal
                           text-gray-700
                           bg-white bg-clip-padding
                           border border-solid border-gray-300
                           rounded transition ease-in-out
                           m-0 focus:text-gray-700 focus:bg-white 
                           focus:border-blue-600 focus:outline-none"

                    value={formValues.country}
                    onChange={handleChange}
                    placeholder="What is your Name"
               
                /> */}
                <select className="form-select appearance-none
                        block w-full px-3 py-1.5 text-base font-normal
                        text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                        rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600
                         focus:outline-none" aria-label="Default select example"
                    name="country"
                    value={formValues.country} onChange={handleChange}
                    style={{ border: error && formValues.country.length <= 0 ? '1px solid red' : "1px solid gray" }}
                >
                    <option value="-- Select an Option --">-- Select an Option --</option>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                    {countries?.map((ele, index) => (

                        <option key={index}  >{ele.name}</option>


                    ))}
                </select>
                {error && formValues.country.length <= 0 ? <p className='text-red-500 py-2'>Cannot be empty</p> : <></>}
            </div>
            <div className="flex space-x-2 ">
                <button type="button"
                    className="inline-block
                        px-6 py-2.5 bg-blue-600 text-white 
                        font-medium text-xs leading-tight 
                        uppercase rounded shadow-md hover:bg-blue-700 
                        hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                        focus:outline-none focus:ring-0 active:bg-blue-800 
                        active:shadow-lg transition duration-150 
                        ease-in-out"

                    onClick={submitFormData}>Next</button>
            </div>

        </div>
    )
}

export default FirstForm