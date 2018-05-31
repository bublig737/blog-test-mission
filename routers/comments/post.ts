import { RequestHandler, Request, Response } from 'express'
import { CommentModel, CommentDocument, CommentInterface } from '~/models'


const handler: RequestHandler = (request: Request, response: Response) => {

  let body: CommentInterface = request.body

  CommentModel.create(request.body)

    .then((comment: CommentDocument) => {

      response.status(201).json(comment)

    })
}


export default handler