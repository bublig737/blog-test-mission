import { RequestHandler, Request, Response, NextFunction } from 'express'
import { UserModel, UserDocument, UserInterface } from '~/models'


const handler: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {

  const body: UserInterface = request.body

  UserModel.create(body)

    .then((user: UserDocument) => {

      request.logIn(user, (error) => {

        if (error) { next(error) }

        response.status(201).json(user)

      })
    })

    .catch((error: Error) => next(error))

}


export default handler