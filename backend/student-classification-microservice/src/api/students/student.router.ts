import { Router, Request, Response, NextFunction } from 'express'
const router: Router = Router()

const list = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: 'Classified',
    statusCode: 201,
  })
}

router.get('/', list)

export default router
