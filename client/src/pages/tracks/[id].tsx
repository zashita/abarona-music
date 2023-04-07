import React, {useState} from 'react';
import MainLayout from "@/layouts/MainLayout";
import {Grid} from "@mui/material";
import {ITrack} from "@/types/track";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {GetServerSideProps} from "next";
import axios from "axios";
import {SERVER_URL} from "@/server_url";

const TrackInfo = (serverTrack: any) => {
    const [track, setTrack] = useState(serverTrack.serverTrack)
    console.log(track)



    return (
        <>
            <Grid>
                <Box
                    margin={'20px auto'}
                    width={'120px'}
                    height={'120px'}
                    bgcolor={'#565656'}

                >
                    <img src={SERVER_URL + track.cover} alt={'TRACK COVER DIDNT LOAD'} width={'100px'} height={'100px'}/>
                </Box>

                <Box bgcolor={'#565656'}>
                    <Typography>{track.lyrics}</Typography>
                </Box>
                <Typography>listens: {track.listens}</Typography>
            </Grid>
        </>
    );
};

    export default TrackInfo;

    export const getServerSideProps : GetServerSideProps = async ({params}) =>{
        console.log(SERVER_URL + 'tracks/' + params)
           // @ts-ignore
        const response = await axios.get(SERVER_URL + 'tracks/' + params.id)



        return{
            props:{
                serverTrack: response.data
            }
        }
    }
