import { Router } from 'express'
import get from './get'
import post from './post'
import count from './count'
import _id from './_id'
import isAuthenticated from '~/middleware/auth/isAuthenticated'



const router: Router = Router()

router.get('/', get)

router.post('/', post)

router.use('/count', count)

router.use('/:id', _id)

export default router