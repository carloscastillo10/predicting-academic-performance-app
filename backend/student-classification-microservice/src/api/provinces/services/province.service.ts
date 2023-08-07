import { connectDB } from '@db/connection'
import { Province, ProvinceModel } from '@api/provinces/models/province.model'

export class ProvinceService {
  _db = connectDB()

  async list(): Promise<Province[] | undefined> {
    try {
      const provinces = await ProvinceModel.find<Province>({})
      return provinces
    } catch (error) {
      console.log(error)
    }
  }
}
