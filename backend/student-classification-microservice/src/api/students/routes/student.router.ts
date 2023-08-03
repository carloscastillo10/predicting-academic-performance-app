import { Router, Request, Response, NextFunction } from 'express'
import { StudentService } from '@api/students/services/student.service'
import { ClassifyStudentDto } from '../models/student.dto'

const router: Router = Router()
const service: StudentService = new StudentService()

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await service.create(req.body)
    res.status(201).json({
      message: 'Created',
      statusCode: 201,
    })
  } catch (error) {
    next(error)
  }
}

const list = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: 'Classified',
    statusCode: 201,
  })
}

router.post('/', create)
router.get('/', list)

export default router
