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

export interface ITrackItem{
    track: ITrack;
    active?: boolean;
}

const track: ITrack = {
    name: "Velich",
    author: "Daun",
    lyrics: "я памятаю свое риднэ сило" +
        "loh loh loh loh loh loh loh loh loh loh " +
        "lo hlo hlo hl ohloh loh loh loh loh loh l]l]" +
        "lo hloh loh loh loh loh loh loh loh loh loh " +
        "lko hlo hlo hlo hlo hloh lo hlo hlo hloh loh " +
        "lo ho hlo hloh loh loh loh loh loh loh loh loh ]l",
    cover: "image/f05d8d39-06b4-4cfe-90bb-2e8cd44188ac.jpg",
    audio: "http://localhost:5000/audio/9b94de0e-0f45-411f-98be-1aba80255db1.mp3",
    listens: 0,
    _id: "640ad92a751c84e979e5d104",
}
let audio: any;


export default function Player(props: ITrackItem) {

    useEffect(()=>{
        if(!audio) {
            audio = new Audio()
            audio.src = track.audio
            audio.volume = volume / 100;
        }
    },[])


    const {pause, currentTime, duration, current, volume} = useTypeSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume} = useActions()

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



    return (
        <Grid width={'100%'}>
            <Stack direction={'row'} width={'100%'} spacing={'25%'} height={'80px'}>
                <Stack direction = 'row' spacing={2} ml = {2} mt = {2}>
                    <img src={track.cover} alt={'track cover'}/>
                    <Stack direction = 'column'>
                        <Typography variant = 'subtitle1' color={'#fff'}>{track.name}</Typography>
                        <Typography variant = 'subtitle2' color = {'#a9a9a9'}>{track.author}</Typography>
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
                <Slider max={45} defaultValue={30} aria-label="Disabled slider"/>

            </Stack>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" width= '200px'>
                <VolumeUp htmlColor={'#fff'}/>
                <ProgressBar current={volume} max={100} onChange={changeVolume}/>

            </Stack>
            </Stack>
        </Grid>
    );
}
