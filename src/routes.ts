import { Router } from 'express'
import UserController from './controllers/PingController'

const routes = Router()

routes.get('/ping', UserController.ping)


export default routes
