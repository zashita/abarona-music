import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Track} from "../../track/track.schema";
import * as mongoose from "mongoose";

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    cover: string;


    @Prop([{type: mongoose.Schema.Types.ObjectId, ref: `Track`}])
    tracks: Track[];

    @Prop()
    description: string;

    @Prop()

    realise: number;

}

export const AlbumSchema = SchemaFactory.createForClass(Album);