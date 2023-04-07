import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {ITrack} from "@/types/track";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {useTypeSelector} from "@/hooks/useTypeSelector";
import {useActions} from "@/hooks/useActions";
import {useEffect} from "react";
import ProgressBar from "@/components/ProgressBar";
import {SERVER_URL} from "@/server_url";
import Image from "next/image";

export interface ITrackItem{
    track: ITrack;
    active?: boolean;
}


let audio: any;


export default function Player(props: ITrackItem) {
    const {pause, currentTime, duration, current, volume} = useTypeSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration} = useActions()

    useEffect(()=>{
        if(!audio) {
            audio = new Audio()

        }else{
            setAudio();
            play();
        }
    },[current])

    const setAudio = () =>{
        if(current) {
            // @ts-ignore
            audio.src = SERVER_URL + current.audio;
            console.log(audio.src);
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(audio.duration)
            }

            audio.ontimeupdate = () => {
                setCurrentTime(audio.currentTime)
            }
        } else {
            return null
        }
    }




    const play = () =>{
        if(pause){
            playTrack()
            audio.play();
        } else {
            pauseTrack()
            audio.pause();
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setVolume(Number(e.target.value))
        audio.volume = Number(e.target.value)/ 100
    }


    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setCurrentTime(Number(e.target.value))
        audio.currentTime = Number(e.target.value);
    }

    // @ts-ignore
    return (
        <Grid width={'100%'}>
            <Stack direction={'row'} width={'100%'} spacing={'15%'} height={'80px'}>
                <Stack direction = 'row' spacing={2} ml = {2} mt = {2}>

                    <img
                        src={SERVER_URL + current?.cover}
                        alt={'track cover'}
                        width={'50px'}
                        height={'50px'}
                    />
                    <Stack direction = 'column'>
                        <Typography variant = 'subtitle1' color={'#fff'}>{current?.name}</Typography>
                        <Typography variant = 'subtitle2' color = {'#a9a9a9'}>{current?.author}</Typography>
                    </Stack>

                </Stack>
            <Stack direction={'column'} spacing={0}>
                <Stack direction={'row'}
                       width={'500px'}
                       justifyContent={'center'}
                       alignItems={'center'} mt={0}
                       spacing={1}
                >
                    <SkipPreviousIcon sx={{width: '30px', height: '30px'}} htmlColor={'#fff'}/>
                    <IconButton
                        onClick={play}>
                        {
                            !pause?<PauseCircleIcon sx={{width: '40px', height: '40px'}} htmlColor={'#fff'}/>
                            :<PlayCircleIcon sx={{width: '40px', height: '40px'}} htmlColor={'#fff'}/>
                        }
                    </IconButton>
                    <SkipNextIcon sx={{width: '30px', height: '30px'}} htmlColor={'#fff'}/>
                </Stack>
                <Stack direction={'row'}>
                    <Typography>
                        {/*{Math.floor(currentTime / 60)} : {(currentTime % 60)}*/}
                    </Typography>
                    <ProgressBar
                        current={currentTime}
                        max = {duration}
                        onChange={changeCurrentTime}
                        variant={'time'}/>
                    <Typography>
                        {/*{Math.floor(duration / 60)} : {(duration % 60)}*/}
                    </Typography>
                </Stack>


            </Stack>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" width= '200px'>
                <VolumeUp htmlColor={'#fff'}/>
                <ProgressBar
                    current={volume}
                    max={100}
                    onChange={changeVolume}
                    variant={'volume'}/>
            </Stack>
            </Stack>
        </Grid>
    );
}
