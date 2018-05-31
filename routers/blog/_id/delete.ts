import { RequestHandler, Response, Request, NextFunction } from 'express'
import { BlogModel, BlogDocument } from '~/models/blog'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  const id: string = request.params['id']

  if (id.length != 24) { response.status(404).json({ message: 'Not found' }) }

  BlogModel.findByIdAndUpdate(id, {status: 'deactive'})
  
  .then(blog => {
    
    if (!blog) { response.status(404).json({ message: 'Not found' }) }

    response.sendStatus(200)

    })
}


export default handler