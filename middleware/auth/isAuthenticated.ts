import { Request, Response, RequestHandler, NextFunction } from 'express'


const isAuthenticated: RequestHandler = (request: Request, response: Response, next: NextFunction) => {

  if (request.isAuthenticated()) {

    next()

  } else {

    response.status(403).json({ message: "Unauthorized" })

  }
}


export default isAuthenticated