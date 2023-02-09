import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    cover: string;


    @Prop([String])
    tracks: string[];

    @Prop()
    description: string;

    @Prop()

    realise: number;

}

export const AlbumSchema = SchemaFactory.createForClass(Album);