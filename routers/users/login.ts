import { RequestHandler, Request, Response } from 'express'


const handler: RequestHandler = async (request: Request, response: Response) => {

    response.status(202).json({message: "Authorization successfully"})

}


export default handler