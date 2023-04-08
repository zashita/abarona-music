import {TrackAction, TrackActionTypes, TrackState} from "@/types/track";

const initialState : TrackState = {
    verifiedTracks : [],
    tracks: [],
    error: '',
}


export const trackReducer = (state = initialState, action: TrackAction): TrackState => {

    switch (action.type){

        case (TrackActionTypes.FETCH_TRACKS):{
            return {...state, tracks: action.payload, error: ''}
        }

        case (TrackActionTypes.FETCH_ERROR):{
            return {...state, error: action.payload}
        }

        case (TrackActionTypes.FETCH_VERIFIED_TRACKS):{
            return {...state, verifiedTracks: action.payload, error: ""}
        }

        default: return state
    }
}
