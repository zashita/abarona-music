import Router from 'express'
import TrackController from './TrackController.js'

const router = new Router();

router.get('/tracks', TrackController.getAll)
router.post('/tracks', TrackController.create)
router.get('/tracks/:id', TrackController.getOne)
router.delete('/tracks:id', TrackController.deleteTrack)

export default router

