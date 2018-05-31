import { RequestHandler, Request, Response, NextFunction } from 'express'
import { CommentModel, CommentDocument, CommentInterface } from '~/models'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  let where: CommentInterface = {}

  if (request.query.where) {

    where = JSON.parse(request.query.where)
  
  }

  where.status = 'active'
  
  CommentModel.find({ where }).count(count => {

    response.status(202).json({

      count: `${!count ? 0 : count}`

    })

  }).catch((error: Error) => next(error))

}


export default handler