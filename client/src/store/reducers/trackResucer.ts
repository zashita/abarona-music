import {TrackAction, TrackActionTypes, TrackState} from "@/types/track";
import {PlayerActionTypes} from "@/types/player";

const initialState : TrackState = {
    tracks: [],
    error: '',
}


export const trackReducer = (state = initialState, action: TrackAction): TrackState => {

    switch (action.type){

        case (TrackActionTypes.FETCH_TRACKS):{
            return {tracks: action.payload, error: ''}
        }

        case (TrackActionTypes.FETCH_ERROR):{
            return {...state, error: action.payload}
        }

        default: return state
    }
}
