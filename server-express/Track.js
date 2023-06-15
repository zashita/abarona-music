import mongoose from "mongoose";

const Track = new mongoose.Schema({
    name:{type: String, required: true},
    author:{type: String, required: true},
    lyrics: {type: String, required: true},
    cover: {type: String, required: true},
    audio: {type: String, required: true}
})

export default mongoose.model('Track', Track)
