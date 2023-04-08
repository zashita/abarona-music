import {Dispatch} from "react";
import {TrackAction, TrackActionTypes} from "@/types/track";
import axios from "axios";


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks?count=50');
            dispatch({type: TrackActionTypes.FETCH_TRACKS,
            payload: response.data})
        } catch (error){
            dispatch({type: TrackActionTypes.FETCH_ERROR,
            payload: 'Error'})
        }
    }
}

const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/shazam-events/list',
    params: {artistId: '73406786', l: 'en-US', from: '2022-12-31', limit: '50', offset: '0'},
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': '06b546e39bmsha3204fafe910b50p13a43ejsn43eebba2ee96'
    }
};
export const fetchVerifiedTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.request(options);
            dispatch({type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data})
        } catch (error){
            dispatch({type: TrackActionTypes.FETCH_ERROR,
                payload: 'Error'})
        }
    }
}

