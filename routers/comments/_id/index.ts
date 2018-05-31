import { Router } from 'express'
import get from './get'
import put from './put'
import remove from './delete'
import isAuthenticated from 'middleware/auth/isAuthenticated';


const router: Router = Router({ mergeParams: true })

router.get('/', get)

router.put('/', isAuthenticated, put)

router.delete('/', isAuthenticated, remove)


export default router