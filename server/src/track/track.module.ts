import {Module} from "@nestjs/common"
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Track, TrackSchema} from "./track.schema";
import {Album, AlbumSchema} from "../album/schemas/album.schema";
import {FileService} from "../file/file.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}])
    ],
    controllers:[TrackController],
    providers:[TrackService, FileService]
})
export class TrackModule{};