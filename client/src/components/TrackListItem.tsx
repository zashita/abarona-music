import React, {useEffect} from 'react';
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {ITrack} from "@/types/track";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from '@mui/icons-material/Pause';
import InfoIcon from '@mui/icons-material/Info';
import {useRouter} from "next/router";
import {SERVER_URL} from "@/server_url";
import {useActions} from "@/hooks/useActions";
import IconButton from "@mui/material/IconButton";
import CustomMenu from "@/components/Menu";
import {setCurrentTime} from "@/store/actions-creators/player";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "@/hooks/useTypeSelector";

export interface ITrackItem{
    track: ITrack;
    active?: boolean;
}

const TrackListItem = (props: ITrackItem) => {
    const {track, active = false} = props;
    const {pauseTrack, playTrack, setCurrent} = useActions()
    const {current} = useTypeSelector(state => state.player);
    const router = useRouter();
    const play = (event: any) =>{
        event.stopPropagation()
        setCurrent(track);
        playTrack()
    }
    return (
        <Card sx={{ display: 'flex' , bgcolor: '#3b3b3b', marginBottom: '10px', height: '50px'}} key={track._id}>
            <Box
                justifyContent={"center"}
                ml={'30px'}
                mr = {'30px'}
                alignItems={"center"}
                p={1.5}


            >
                <IconButton
                onClick={play}>
                    {
                        active?<PauseIcon htmlColor={'#fff'}/>:<PlayArrowIcon htmlColor={'#fff'}/>
                    }
                </IconButton>

            </Box>

            <CardMedia
                component="img"
                sx={{ width: '4vw' ,marginRight: '5vw'}}
                image={SERVER_URL+ track.cover}
                alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto', margin: 0, padding: 0, width: '50vw'}}>
                    <Typography component="div" variant="subtitle1" color={'#fff'}>
                        {track.name}
                    </Typography>
                    <Typography variant="subtitle2" component="div" color = {'#b0b0b0'}>
                        {track.author}
                    </Typography>
                </CardContent>
            </Box>
            <Box
                // onClick={() => router.push('/tracks/' + track._id)}
                p = {1.5}
            >
                <CustomMenu trackID={track._id}/>
            </Box>
        </Card>
    );
};

export default TrackListItem;
