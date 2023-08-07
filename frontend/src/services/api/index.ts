const STUDENT_CLASSIFICATION_MICROSERVICE_URL = 'http://localhost:3001'
console.log(STUDENT_CLASSIFICATION_MICROSERVICE_URL)

export const endPoints = {
  students: {
    classify: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/students`,
  },
  sexs: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/sexs`,
  },
  provinces: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/provinces`,
    listCantons: (id: string) => `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/provinces/${id}/cantons`,
  },
  subjects: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/subjects`,
  },
  periods: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/periods`,
  },
}
