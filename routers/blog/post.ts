import { RequestHandler, Request, Response } from 'express'
import { BlogModel, BlogDocument, BlogInterface } from '~/models/blog'
import textFormatter from '~/middleware/textFormatter'

const handler: RequestHandler = (request: Request, response: Response) => {

  let body: BlogInterface = request.body

  if (body.body) { body.body = textFormatter(body.body) }

  BlogModel.create(request.body)

    .then((blog: BlogDocument) => {

      response.status(201).json(blog)

    })
}

export default handler