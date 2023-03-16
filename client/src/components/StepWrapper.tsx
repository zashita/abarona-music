import React from 'react';
import {Container, Grid, Step, StepLabel, Stepper} from "@mui/material";

export interface IStepWrapperProps{
    children: any;
    activeStep: number
}

export const steps = ['Complete the track information form', 'Upload audio & cover']
const StepWrapper = (props: IStepWrapperProps) => {

    return (
        <Container>
            <Grid mb = '60px'>
                <Stepper
                    activeStep={props.activeStep}
                    sx = {{'& .css-1hv8oq8-MuiStepLabel-label.Mui-active': {
                        color: 'rgba(255, 255, 255, 0.87)',
                    },
                        '.css-1vyamtt-MuiStepLabel-labelContainer': {
                        width: '100%',
                        color: 'rgba(0, 0, 0, 0.6)',
                    }}}>
                    {steps.map((step, index)=>{
                        return(
                            <Step
                                key={index}
                                completed={props.activeStep > index}
                                >
                                <StepLabel color={'white'}>{step}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </Grid>
            <Grid>
                {props.children}
            </Grid>
        </Container>



    );
};

export default StepWrapper;