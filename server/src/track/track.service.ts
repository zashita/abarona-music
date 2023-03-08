import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Track, TrackDocument} from "./track.schema";
import {Model, ObjectId} from "mongoose";
import {CreateTrackDto} from "./dto/create-track.dto";
import {FileService, FileType} from "../file/file.service";

@Injectable()

export class TrackService{

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                private fileService: FileService) {}

    async create(dto: CreateTrackDto, audio, cover): Promise<Track>{
        const coverPath = this.fileService.createFile(FileType.IMAGE, cover)
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, cover: coverPath})
        return track;
    }


    async  getAll(count=  10, offset =  0): Promise<Track[]>{
        const tracks = await this.trackModel.find().skip(Number(offset)).limit(Number(count));
        return tracks;
    }

    async getOne(id: ObjectId): Promise<Track>{
        const track = await this.trackModel.findById(id);
        return track;

    }

    async delete(id: ObjectId): Promise<ObjectId>{
    const track = await this.trackModel.findByIdAndDelete(id);
    return track.id;
    }

    async listen(id: ObjectId){
        const track = await this.trackModel.findById(id);
        track.listens++;
        track.save();
    }

    async search(query: string):Promise<Track[]> {
        const tracks = this.trackModel.find({
            name: {$regex: new RegExp(query, 'i')}
        })
        return tracks;
    }
}
