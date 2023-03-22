export interface ITrack {
    _id: string;
    name: string;
    author: string;
    lyrics: string;
    cover: string;
    audio: string;
    listens: number;
}

export interface TrackState {
    tracks: ITrack[];
    error: string;
}

export enum TrackActionTypes{
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_ERROR = 'FETCH_ERROR',
}

export interface FetchTrackAction {
    type: TrackActionTypes.FETCH_TRACKS;
    payload: ITrack[];
}

export interface FetchErrorAction {
    type: TrackActionTypes.FETCH_ERROR;
    payload: string;
}

export type TrackAction = FetchTrackAction | FetchErrorAction;



