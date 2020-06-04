import { Request, Response } from 'express'

class PingController {
  public constructor() {
  }

  public async ping(req: Request, res: Response): Promise<Response> {
    return res.send('pong')
  }
}

export default new PingController()
