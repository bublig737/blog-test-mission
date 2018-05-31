import { RequestHandler, Request, Response, NextFunction } from 'express'
import { BlogModel, BlogDocument } from '~/models/blog'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  const id: string = request.params['id']

  if (id.length != 24) { response.status(404).json({ message: 'Not found' }) }

  BlogModel.findOne({ _id: id, status: 'active' }).then((blog) => {

    if (!blog) { response.status(404).json({ message: 'Not found' }) }

    response.status(202).json(blog)

  }).catch((error: Error) => { next(error) })
}


export default handler