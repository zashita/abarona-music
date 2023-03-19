import {ITrack} from "@/types/track";

export interface IPlayer {
  current: ITrack | null;
  pause: boolean;
  volume: number;
  duration: number;
  currentTime: number;
}

export enum PlayerActionTypes {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_VOLUME = 'SET_VOLUME',
    SET_DURATION = 'SET_DURATION',
    SET_CURRENT = 'SET_CURRENT',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',

}

export interface PlayAction{
    type: PlayerActionTypes.PLAY;

}
export interface PauseAction{
    type: PlayerActionTypes.PAUSE;
}
export interface SetVolumeAction{
    type: PlayerActionTypes.SET_VOLUME;
    payload: number;

}
export interface SetDurationAction{
    type: PlayerActionTypes.SET_DURATION;
    payload: number;
}
export interface SetCurrentAction{
    type: PlayerActionTypes.SET_CURRENT;
    payload: ITrack;
}
export interface SetCurrentTimeAction{
    type: PlayerActionTypes.SET_CURRENT_TIME;
    payload: number;
}

export type PlayerAction =
    PlayAction
    | PauseAction
    | SetVolumeAction
    | SetDurationAction
    | SetCurrentAction
    | SetCurrentTimeAction;

