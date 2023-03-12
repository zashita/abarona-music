import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import {Grid} from "@mui/material";
import {ITrack} from "@/interfaces/track";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TrackInfo = () => {
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
            audio: "audio/4dc3502a-347d-49c9-b10a-b8c80e05cc99.mp3",
            listens: 0,
            _id: "640ad92a751c84e979e5d104",
        }


    return (
        <MainLayout>
            <Grid>
                <Box
                    margin={'20px auto'}
                    width={'120px'}
                    height={'120px'}
                    bgcolor={'#565656'}

                >
                    <img src={track.cover} alt={'TRACK COVER DIDNT LOAD'} width={'100px'} height={'100px'}/>
                </Box>

                <Box bgcolor={'#565656'}>
                    <Typography>{track.lyrics}</Typography>
                </Box>
                <Typography>listens: {track.listens}</Typography>
            </Grid>
        </MainLayout>
    );
};

    export default TrackInfo;