import {IVerifiedTrack} from "@/types/verifiedTrack";

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

    verifiedTracks: IVerifiedTrack[];
    error: string;
}

export enum TrackActionTypes{
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_VERIFIED_TRACKS = 'FETCH_VERIFIED_TRACKS',
    FETCH_ERROR = 'FETCH_ERROR',
}

export interface FetchTrackAction {
    type: TrackActionTypes.FETCH_TRACKS;
    payload: ITrack[];
}

export interface FetchVerifiedTrackAcrion{
    type: TrackActionTypes.FETCH_VERIFIED_TRACKS;
    payload: IVerifiedTrack[];
}

export interface FetchErrorAction {
    type: TrackActionTypes.FETCH_ERROR;
    payload: string;
}

export type TrackAction = FetchTrackAction | FetchErrorAction | FetchVerifiedTrackAcrion;



