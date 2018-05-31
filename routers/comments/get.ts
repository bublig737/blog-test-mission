import { RequestHandler, Request, Response, NextFunction } from 'express'
import { CommentModel, CommentDocument, CommentInterface } from '~/models'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction ) => {

  let where: CommentInterface = {},
      limit: number = parseInt(request.query.limit),
      offset: number = parseInt(request.query.offset)

  if (request.query.where) {

    where = JSON.parse(request.query.where)
  
  }

  where.status = 'active'

  let query = CommentModel.find(where)

  if (limit) { query.limit(limit) } else { query.limit(10) }

  if (offset) { query.skip(offset) }

  query.exec().then((comments: CommentDocument[]) => {

    if (!comments) { response.status(404).json({ message: 'Not found' }) }

    response.status(202).json(comments)

  }).catch((error: Error)=>{ next(error) })
}


export default handler