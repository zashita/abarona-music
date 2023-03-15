import React, {useState} from 'react';
import MainLayout from "@/layouts/MainLayout";
import StepWrapper, {steps} from "@/components/StepWrapper";
import {Button, Container, Grid, TextField} from "@mui/material";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const forward = () =>{
        setActiveStep((prevState) => {
            if(prevState < steps.length) return prevState + 1;
            else return prevState;
        })
    }

    const back = () => {
        setActiveStep((prevState)=> {
            if(prevState > 0) return prevState - 1;
            else return prevState;
        });
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                <Container>
                    {activeStep === 0?
                        <Grid display={'flex'} direction={'column'} rowGap={2}>
                            <TextField placeholder={"Track name"}></TextField>
                            <TextField placeholder={'Track author'}></TextField>
                            <TextField placeholder={'Track lyrics'}></TextField>


                        </Grid>:
                        <h1>loading</h1>


                    }
                </Container>


            </StepWrapper>
            <Grid width={'60%'} display={'flex'} justifyContent={"space-between"} margin = '0 auto'>
                <Button
                    onClick = {()=> back()}>
                    Previous
                </Button>
                <Button
                    onClick = {()=> forward()}>
                    Next
                </Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;