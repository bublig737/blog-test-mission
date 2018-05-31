import { RequestHandler, Request, Response, NextFunction } from 'express'
import { CommentModel, CommentDocument, CommentInterface } from '~/models'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  const id: string = request.params['id']

  let body: CommentInterface = request.body

  if (id.length != 24) { response.status(404).json({ message: 'Not found' }) }

  CommentModel.findOneAndUpdate({ _id: id, status: 'active' }, body, { new: true }).then((comment) => {

    if (!comment) { response.status(404).json({ message: 'Not found' }) }

    response.status(202).json(comment)

  }).catch((error: Error) => { next(error) })

}


export default handler