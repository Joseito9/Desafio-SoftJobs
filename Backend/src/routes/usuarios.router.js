import { Router } from 'express'
import * as usuarioController from '../controllers/usuarios.controller.js'
import * as errorsController from '../controllers/errors.controller.js'
import { authToken, verifyCredential } from '../middlewares/index.middlewares.js'

const router = Router()

router.post('/usuarios', verifyCredential, usuarioController.register)
router.post('/login', usuarioController.login)
router.get('/usuarios', authToken, usuarioController.findProfile)
router.all('*', errorsController.notFound)

export default router
