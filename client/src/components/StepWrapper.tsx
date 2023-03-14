import React from 'react';
import CustomStepper from "@/components/Stepper";

const StepWrapper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <>
            <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep}/>
            {activeStep===0?
                <p>ШАГ НОМЕР 1</p>
                :
                <p>ШАГ НОМЕР 2</p>}

        </>

    );
};

export default StepWrapper;