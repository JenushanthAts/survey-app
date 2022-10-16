import React, { useState } from 'react'
import FirstForm from '../components/Forms/FirstForm';
import SecondForm from '../components/Forms/SecondForm';
import ThirdForm from '../components/Forms/ThirdForm';
import Results from './Results';

const LandingPage = () => {

    //state for steps
    const [step, setstep] = useState(1);

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    // javascript switch case to show different form in each step
    switch (step) {
        case 1:
            return <FirstForm nextStep={nextStep} />

        case 2:
            return <SecondForm nextStep={nextStep} prevStep={prevStep} />

        case 3:
            return <ThirdForm nextStep={nextStep} prevStep={prevStep} />
        case 4:
            return <Results nextStep={nextStep} />

        default:
            return <>Aventude</>
    }

}

export default LandingPage