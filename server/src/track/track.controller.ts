import {Body, Controller, Delete, Param, Post, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {Get} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {FileFieldsInterceptor} from "@nestjs/platform-express";



@Controller(`/tracks`)


export class TrackController{

    constructor(private trackService: TrackService) {
    }
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: `cover`, maxCount: 1},
        {name: `audio`, maxCount: 1},
        ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto){
        console.log(files.audio[0])
        return this.trackService.create(dto, files.cover[0], files.audio[0]);
    }
    @Get()
    async getAll(){
    return this.trackService.getAll();
    }

    @Get(`:id`)
    getOne(@Param(`id`) id: ObjectId){
    return this.trackService.getOne(id)
    }

    @Delete(`:id`)
    delete(@Param(`id`) id: ObjectId){
        return this.trackService.delete(id);
        }

}