import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Track, TrackDocument} from "./track.schema";
import {Model, ObjectId} from "mongoose";
import {CreateTrackDto} from "./dto/create-track.dto";

@Injectable()

export class TrackService{

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>) {
    }

    async create(dto: CreateTrackDto): Promise<Track>{
        const track = await this.trackModel.create({...dto, listens: 0})
        return track;
    }


    async  getAll(): Promise<Track[]>{
        const tracks = await this.trackModel.find();
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
}