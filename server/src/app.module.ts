
import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path"
const password = `velichvelich23102004`;


@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        MongooseModule.forRoot(`mongodb+srv://zashitacontact:${password}@cluster0.cyulioc.mongodb.net/?retryWrites=true&w=majority`),
        TrackModule]
})


export class AppModule {};