
import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
const password = `velichvelich23102004`;


@Module({
    imports: [
        MongooseModule.forRoot(`mongodb+srv://zashitacontact:${password}@cluster0.cyulioc.mongodb.net/?retryWrites=true&w=majority`),
        TrackModule]
})


export class AppModule {};