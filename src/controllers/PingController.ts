import { Request, Response } from 'express'

class PingController {
  public async ping (req: Request, res: Response): Promise<Response> {
    return res.send('pong')
  }
}

export default new PingController()
