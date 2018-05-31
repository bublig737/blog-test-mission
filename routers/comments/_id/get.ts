import { RequestHandler, Request, Response, NextFunction } from 'express'
import { CommentModel, CommentDocument } from '~/models'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  const id: string = request.params['id']

  if (id.length != 24) { response.status(404).json({ message: 'Not found' }) }

  CommentModel.findOne({ _id: id, status: 'active' }).then((comment) => {

    if (!comment) { response.status(404).json({ message: 'Not found' }) }

    response.status(202).json(comment)

  }).catch((error: Error) => { next(error) })
}


export default handler