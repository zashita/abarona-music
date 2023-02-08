import {Controller} from "@nestjs/common";
import {Get} from "@nestjs/common";



@Controller(`/tracks`)


export class TrackController{

    create(){

    }
    @Get()
    getAll(){
    return `Rabotaet`;
    }

    getOne(){

    }

    delete(){

    }
}