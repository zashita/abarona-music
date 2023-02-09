import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    album: string;

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