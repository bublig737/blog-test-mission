import blog from './blog'
import comments from './comments'
import register from './users/register'
import login from './users/login'
import logout from './users/logout'

import * as passport from 'passport'


import { Router } from 'express'


const router: Router = Router()



router.get('/logout', logout)

router.post('/login', passport.authenticate('local'), login)

router.post('/register', register)

router.use('/blog', blog)

router.use('/comments', comments)



export default router
