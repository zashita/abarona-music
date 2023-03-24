import React, {useState} from 'react';
import MainLayout from "@/layouts/MainLayout";
import StepWrapper, {steps} from "@/components/StepWrapper";
import {Button, Container, Grid, TextField} from "@mui/material";
import Uploader from "@/components/Uploader";
import {useInput} from "@/hooks/useInput";
import axios from "axios";
import {SERVER_URL} from "@/server_url";
import {useRouter} from "next/router";

const Create = () => {
    const [audio, setAudio] = useState(null)
    const [image, setImage] = useState(null)
    const [activeStep, setActiveStep] = useState(0)
    const name = useInput('');
    const author = useInput('');
    const lyrics = useInput('');
    const router = useRouter();
    const forward = () =>{
        setActiveStep((prevState) => {
            if(prevState < steps.length) return prevState + 1;
            else {
                if(audio && image){
                    const formData = new FormData();
                    formData.append('name', name.value);
                    formData.append('author', author.value);
                    formData.append('lyrics', lyrics.value);
                    formData.append('cover', image);
                    formData.append('audio', audio);
                    axios.post(SERVER_URL + 'tracks', formData).then(
                       response => {router.push('/tracks')
                        console.log(formData)}
                    ).catch(e => console.log(e))
                }


                return prevState
            }
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
                            <TextField
                                {...name}
                                placeholder={"Track name"}
                                sx={{color: 'white', backgroundColor: '#4f4f4f',
                                borderRadius: '5px',
                                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                                    color: 'white'
                                    }}}
                            ></TextField>
                            <TextField
                                {...author}
                                placeholder={'Track author'}
                                       sx={{color: 'white', backgroundColor: '#4f4f4f',
                                           borderRadius: '5px',
                                           '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                                           color: 'white'
                                       }}}>
                            </TextField>
                            <TextField
                                {...lyrics}
                                placeholder={'Track lyrics'}
                                       sx={{color: 'white', backgroundColor: '#4f4f4f',
                                           borderRadius: '5px',
                                           '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                                               color: 'white'
                                           }}}>
                            </TextField>


                        </Grid>:
                        <Grid>
                            <Uploader fileType={'audio'} file={audio} setFile={setAudio}/>
                            <Uploader fileType={'image'} setFile={setImage} file={image}/>
                        </Grid>


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