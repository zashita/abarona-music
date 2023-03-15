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
                <Stepper activeStep={props.activeStep}>
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