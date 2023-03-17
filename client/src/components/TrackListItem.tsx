import React from 'react';
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

export interface ITrackItem{
    track: ITrack;
    active?: boolean;
}

const TrackListItem = (props: ITrackItem) => {
    const {track, active = false} = props;
    const router = useRouter();
    return (
        <Card sx={{ display: 'flex' , bgcolor: '#3b3b3b', marginBottom: '10px', height: '50px'}} key={track._id}>
            <Box
                justifyContent={"center"}
                ml={'30px'}
                mr = {'30px'}
                alignItems={"center"}
                p={1.5}


            >
                {
                    active?<PauseIcon htmlColor={'#fff'}/>:<PlayArrowIcon htmlColor={'#fff'}/>
                }
            </Box>

            <CardMedia
                component="img"
                sx={{ width: '50px' ,marginRight: '100px'}}
                image={'../server/dist/static/image/'+ track.cover}
                alt="Армянская обложка"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto', margin: 0, padding: 0}}>
                    <Typography component="div" variant="subtitle1" color={'#fff'}>
                        {track.name}
                    </Typography>
                    <Typography variant="subtitle2" component="div" color = {'#b0b0b0'}>
                        {track.author}
                    </Typography>
                </CardContent>
            </Box>
            <Box
                onClick={() => router.push('/tracks/' + track._id)}
                ml={"600px"}
                p = {1.5}
            >
                <InfoIcon htmlColor={'#fff'}/>
            </Box>
        </Card>
    );
};

export default TrackListItem;