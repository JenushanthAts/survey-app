import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
// import axios from 'axios'
// import weatherApi from '../../common/api/weatherApi';
// import { APIKey } from '../../common/api/apiKey';
const FirstPage = () => {
    const savedName = localStorage.getItem("userName");
    const savedCountry = localStorage.getItem("country");
    const initialName = JSON.parse(savedName);
    const initialCountry = JSON.parse(savedCountry);
    const initialValues = { userName: initialName || "", country: initialCountry || "", temperature: "" };
    const [errorName, setErrorName] = useState(null);
    const [errorCountry, setErrorCountry] = useState(null);
    const [formValues, setFormValues] = useState(initialValues);
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();
    // const apiKey = process.env.REACT_APP_API_KEY

    // console.log(process.env.REACT_APP_API_KEY)
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await axios.get("https://restcountries.com/v2/all");
                setCountries(res.data)
            } catch (err) {
                setErrorCountry(err)
            }
        };
        fetchCountries();
        console.log("ji")
    }, [])
    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         try {
    //             const res = await axios.get("https://restcountries.com/v2/all");
    //             // console.log(res)
    //             setCountries(res.data);
    //             return res
    //         } catch (err) {
    //             console.log(err)
    //         }

    //     };
    //     if (location) {
    //         const fetchWeather = async () => {
    //             try {

    //                 const res = await weatherApi.get(`?q=${location}&appid=${APIKey}`)
    //                 const temp = parseInt(((res.data.main.temp) - 32) / 1.8);
    //                 setFormValues({ ...formValues, temperature: temp })
    //             } catch (err) {
    //                 console.log(err)
    //             }
    //         }
    //         fetchWeather();
    //     }


    //     fetchCountries();

    // }, [countries, location, formValues])

    // const getCapitalCity = async (value) => {
    //     const res = countries.find(e => e.name === value);
    //     setLocation(res.capital)
    // }
    useEffect(() => {
        //storing input fields
        console.log("hre")
        localStorage.setItem("userName", JSON.stringify(formValues.userName));
        localStorage.setItem("country", JSON.stringify(formValues.country));
    }, [formValues.userName, formValues.country])
    const handleChange = (e) => {

        const { name, value } = e.target;
        switch (name) {
            case "userName":
                setErrorName(null)
                setFormValues(prevState => {
                    return { ...prevState, [name]: value }
                })
                break;
            case "country":
                setErrorCountry(null)
                setFormValues(prevState => {
                    return { ...prevState, [name]: value }
                })
                break;

            default: return

        }


    }

    const submitFormData = (e) => {
        e.preventDefault();
        console.log(formValues.userName)
        if (formValues.userName === "" || formValues.userName.trim().length === 0) {
            setErrorName("Name field cannot be empty")
        }
        if (formValues.country === "") {
            setErrorCountry("Select field cannot be empty")
        }
        else {
            setErrorName(null);
            setErrorCountry(null);
            navigate("/secondPage", { state: formValues })
        }


    }




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
                    style={{ border: errorName ? '1px solid red' : "1px solid gray" }}
                />
                {errorName ? <p className='text-red-500 py-2'>{errorName}</p> : <></>}
            </div>
            <div className="mb-3  w-auto">
                <label className="form-label inline-block mb-2 text-gray-700">
                    What is your Country ?
                </label>

                <select className="form-select appearance-none
                        block w-full px-3 py-1.5 text-base font-normal
                        text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                        rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600
                         focus:outline-none" aria-label="Default select example"
                    name="country"
                    value={formValues.country}
                    onChange={handleChange}
                    style={{ border: errorCountry ? '1px solid red' : "1px solid gray" }}
                >
                    <option value="-- Select an Option --">-- Select an Option --</option>

                    {countries?.map((ele, index) => (

                        <option key={index}  >{ele.name}</option>


                    ))}
                </select>
                {errorCountry ? <p className='text-red-500 py-2'>{errorCountry}</p> : <></>}
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

export default FirstPage