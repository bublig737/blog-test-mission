import { RequestHandler, Request, Response } from 'express'


const handler: RequestHandler = async (request: Request, response: Response) => {

  request.logout();

  response.status(200).json({ message: "Exit authorization" })

}


export default handler