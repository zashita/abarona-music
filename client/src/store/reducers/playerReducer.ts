import {PlayerAction, PlayerActionTypes} from "@/types/player";
import {Context, createWrapper, HYDRATE} from "next-redux-wrapper";
import {createStore, Store} from "redux";

export const initialState = {
    pause: false,
    volume: 50,
    duration: 0,
    current: null,
    currentTime: 0,
}
export const playerReducer = (state = initialState, action: PlayerAction) =>{
    switch (action.type){


        case PlayerActionTypes.PAUSE:{
            return {...state, pause: true}
        }
        case PlayerActionTypes.SET_VOLUME:{
            return {...state, volume: action.payload}
        }
        case PlayerActionTypes.SET_DURATION:{
            return {...state, duration: action.payload}
        }
        case PlayerActionTypes.SET_CURRENT:{
            return {...state, current: action.payload, duration: 0, currentTime: 0}
        }
        case PlayerActionTypes.SET_CURRENT_TIME:{
            return {...state, currentTime: action.payload}
        }

        default: return state;
    }
}