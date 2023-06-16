import TrackService from "./TrackService.js";

class TrackController{
    async getAll(req, res){
        try {
            const tracks = await TrackService.getAll();
            res.json(tracks)
        } catch (e) {

        }
    }

    async getOne(req, res){
        try {
            const {id} = req.params
            const track = await TrackService.getOne(id)
            res.json(track)
        } catch (e) {
            res.status(500).json({message: 'Неудача'})
        }
    }

    async create(req, res){
        try {
            const {cover, audio} = req.files
            const place = await TrackService.create(req.body, cover, audio)
            res.json(place)
        } catch (e) {

        }
    }
    async deleteTrack(req, res){
        try {
            const {id} = req.params
            const deletedTrack = await TrackService.delete(id)
            res.json(deletedTrack);
        } catch (e) {

        }
    }

    async listen(req, res){
        try{
            const {id} = req.params
            const updatedTrack = await TrackService.listen(id)
            res.json(updatedTrack)
        } catch (e) {
            console.log(e)
        }
    }

}

export default new TrackController()

