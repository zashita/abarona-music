import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {ITrack} from "@/interfaces/track";
export interface ITrackListProps {
    tracks: ITrack[];
}
const TrackList = (props: ITrackListProps) => {
    const list = [...props.tracks].map((track,index)=>{
        return(
            <Card sx={{ display: 'flex' , bgcolor: '#3b3b3b', marginBottom: '10px', height: '50px'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
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
            </Card>
        )
    })
    return (
        <div>
            {list}
        </div>

    );
};

export default TrackList;