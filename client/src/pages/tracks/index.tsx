import React from 'react';
import Navbar from "@/components/Navbar";
import MainLayout from "@/layouts/MainLayout";
import TrackList from "@/components/TrackList";
import {useTypeSelector} from "@/hooks/useTypeSelector";
import {steps} from "@/components/StepWrapper";
import Typography from "@mui/material/Typography";
import {NextThunkDispatch, wrapper} from "@/store";
import {RootState} from "@/store/reducers";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {Store} from "redux";
import {ParsedUrlQuery} from "querystring";
import {fetchTracks} from "@/store/actions-creators/track";



const Index = () => {
    const {tracks, error} = useTypeSelector(state => state.track);
    if (error) {
        return (
            <MainLayout>
                <Typography>{error}</Typography>
            </MainLayout>
        )
    }
    console.log(tracks)
    return (
            <MainLayout>
                <TrackList tracks={tracks}/>
            </MainLayout>


    );
};

export default Index;


export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
    return {
        props: {},
    };
});
