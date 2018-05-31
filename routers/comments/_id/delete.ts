import { RequestHandler, Response, Request, NextFunction } from 'express'
import { CommentModel, CommentDocument } from '~/models'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  const id: string = request.params['id']

  if (id.length != 24) { response.status(404).json({ message: 'Not found' }) }

  CommentModel.findByIdAndUpdate(id, {status: 'deactive'})
  
  .then(comment => {
    
    if (!comment) { response.status(404).json({ message: 'Not found' }) }

    response.sendStatus(200)

    })
}


export default handler