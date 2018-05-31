import { RequestHandler, Request, Response, NextFunction } from 'express'
import { BlogModel, BlogDocument, BlogInterface } from '~/models/blog'
import textFormatter from '~/middleware/textFormatter'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  const id: string = request.params['id']

  const body: BlogInterface = request.body

  if (body.body) { body.body = textFormatter(body.body) }

  if (id.length != 24) { response.status(404).json({ message: 'Not found' }) }

  BlogModel.findOneAndUpdate({ _id: id, status: 'active' }, body, { new: true }).then((blog) => {

    if (!blog) { response.status(404).json({ message: 'Not found' }) }

    response.status(202).json(blog)

  }).catch((error: Error) => { next(error) })

}


export default handler