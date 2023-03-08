import {Body, Controller, Delete, Param, Post, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
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
        return this.trackService.create(dto, files.audio[0], files.cover[0]);
    }
    @Get()
    async getAll(@Query('count') count: number,
                 @Query('offset') offset: number){
    return this.trackService.getAll(count, offset);
    }

    @Get('/search')
    search(@Query('query') query:string){
        return this.trackService.search(query)
    }

    @Get(`:id`)
    getOne(@Param(`id`) id: ObjectId){
    return this.trackService.getOne(id)
    }

    @Delete(`:id`)
    delete(@Param(`id`) id: ObjectId){
        return this.trackService.delete(id);
        }

    @Post('/listen/:id')
    listen(@Param('id') id: ObjectId){
        return this.trackService.listen(id);
    }

}
