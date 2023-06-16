import FileService from "./FileService.js";
import Track from "./Track.js";
class TrackService{
    async create(track, cover, audio){
        const photoName = FileService.saveFile(cover, 0); // 0 - picture 1 - audio
        const audioName = FileService.saveFile(audio, 1)
        const newTrack = Track.create({...track, cover: photoName, audio: audioName, listens: 0})
        return newTrack
    }

    async getAll(){
        const tracks = await Track.find()
        return tracks
    }

    async getOne(id){
        if(!id){

        }else{
            const track = await Track.findById(id)
            return track
        }
    }
    async delete(id){
        if(!id){

        }else{
            const deletedTrack = await Track.findByIdAndDelete(id)
            FileService.deleteFile(deletedTrack.audio)
            FileService.deleteFile(deletedTrack.cover)
            return deletedTrack
        }
    }

    async listen(id){
        try{
            if(!id){

            }else {
                const track = await Track.findById(id)
                const updatedTrack = await Track.findByIdAndUpdate(id, {...track, listens: track.listens++}, {new: true})
                return updatedTrack
            }
        } catch (e) {
            console.log(e)
        }

    }

}

export default new TrackService()
