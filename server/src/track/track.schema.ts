import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
import {Album} from "../album/schemas/album.schema";
import * as mongoose from "mongoose";

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: `Album`})
    album: Album

    @Prop()
    format: string;

    @Prop()

    lyrics: string;

    @Prop()

    cover: string;

    @Prop()
    listens: number;
}

export const TrackSchema = SchemaFactory.createForClass(Track);