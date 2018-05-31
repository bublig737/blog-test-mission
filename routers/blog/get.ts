import { RequestHandler, Request, Response, NextFunction } from 'express'
import { BlogModel, BlogDocument, BlogInterface } from '~/models'


const handler: RequestHandler = (request: Request, response: Response, next: NextFunction ) => {

  console.log(request.query);
  

  let where: BlogInterface = {},
      limit: number = parseInt(request.query.limit),
      offset: number = parseInt(request.query.offset)

  if (request.query.where) {

    where = JSON.parse(request.query.where)

  }

  where.status = 'active'

  let query = BlogModel.find(where)

  if (limit) { query.limit(limit) } else { query.limit(10) }

  if (offset) { query.skip(offset) }

  query.exec().then((blogs: BlogDocument[]) => {

    if (!blogs) { response.status(404).json({ message: 'Not found' }) }

    response.status(202).json(blogs)

  }).catch((error: Error)=>{ next(error) })
}


export default handler