import { RequestHandler, Request, Response, NextFunction } from 'express'
import { BlogModel, BlogDocument, BlogInterface } from '~/models/blog'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  let where: BlogInterface = {}

  if (request.query.where) {

    where = JSON.parse(request.query.where)

  }

  where.status = 'active'

  BlogModel.find({ where }).count(count => {

    response.status(202).json({

      count: `${!count ? 0 : count}`

    })

  }).catch((error: Error) => next(error))

}


export default handler