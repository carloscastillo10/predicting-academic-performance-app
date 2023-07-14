import { CheckBadgeIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const headers = [
  { name: '.' },
  { name: 'estudiante' },
  { name: 'fecha' },
  { name: 'materia' },
  { name: 'status' },
  { name: 'provincia' },
  { name: 'edad' },
  { name: 'sexo' },
  { name: 'discapacidad' },
  { name: 'reprobaciones' },
  { name: 'aab1' },
  { name: 'acdb1' },
  { name: 'apeb1' },
  { name: 'aab2' },
  { name: 'acdb2' },
  { name: 'apeb2' },
]

const students = [
  {
    name: 'Carlos Castillo',
    image: 'https://ui-avatars.com/api/?name=Carlos+Castillo&background=003f72&color=fff',
    identification: '1104999111',
    date: '14 Jul 2023',
    time: '16:20',
    subject: 'Procesos de Ingeniera de Software',
    status: 'Aprobada',
    province: 'Loja',
    age: 23,
    sex: 'H',
    disability: 'No',
    percentageDisability: 0,
    failures: 0,
    aab1: 8.71,
    acdb1: 10,
    apeb1: 10,
    aab2: 8.91,
    acdb2: 10,
    apeb2: 5,
  },
  {
    name: 'Luisa Diaz',
    image: 'https://ui-avatars.com/api/?name=Luis+Diaz&background=003f72&color=fff',
    identification: '1104999222',
    date: '13 Jul 2023',
    time: '14:10',
    subject: 'Ingeniería Web',
    status: 'Reprobada',
    province: 'Pichincha',
    age: 25,
    sex: 'M',
    disability: 'Si',
    percentageDisability: 25,
    failures: 2,
    aab1: 5.71,
    acdb1: 8,
    apeb1: 70,
    aab2: 5.91,
    acdb2: 3,
    apeb2: 0,
  },
  {
    name: 'Thalia Mijas',
    image: 'https://ui-avatars.com/api/?name=Thalia+Mijas&background=003f72&color=fff',
    identification: '1104999222',
    date: '12 Jul 2023',
    time: '11:09',
    subject: 'Programación Avanzada',
    status: 'Aprobada',
    province: 'Guayas',
    age: 25,
    sex: 'M',
    disability: 'No',
    percentageDisability: 0,
    failures: 2,
    aab1: 5.71,
    acdb1: 8,
    apeb1: 70,
    aab2: 5.91,
    acdb2: 3,
    apeb2: 0,
  },
  {
    name: 'Fernando Álvarez',
    image: 'https://ui-avatars.com/api/?name=Fernando+Alvarez&background=003f72&color=fff',
    identification: '1104999111',
    date: '11 Jul 2023',
    time: '16:20',
    subject: 'Sistemas Basados en Conocimiento',
    status: 'Aprobada',
    province: 'Azuay',
    age: 27,
    sex: 'H',
    disability: 'No',
    percentageDisability: 0,
    failures: 0,
    aab1: 8.71,
    acdb1: 10,
    apeb1: 10,
    aab2: 8.91,
    acdb2: 10,
    apeb2: 5,
  },
  {
    name: 'Karen Castillo',
    image: 'https://ui-avatars.com/api/?name=Karen+Castillo&background=003f72&color=fff',
    identification: '1104999222',
    date: '11 Jul 2023',
    time: '09:43',
    subject: 'Lógica de la Programacación',
    status: 'Reprobada',
    province: 'Cotopaxi',
    age: 22,
    sex: 'M',
    disability: 'Si',
    percentageDisability: 5,
    failures: 2,
    aab1: 5.71,
    acdb1: 8,
    apeb1: 70,
    aab2: 5.91,
    acdb2: 3,
    apeb2: 0,
  },
]

export function OverViewTable(): React.JSX.Element {
  return (
    <>
      <div className="relative overflow-x-auto mt-6">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500">
              {headers.map((header, index) => (
                <th key={index} className="text-xs font-bold uppercase text-start pe-2.5 pb-3 leading-4">
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-sm text-start ps-6 pe-2.5 pb-5 leading-4 whitespace-nowrap">
                <td className="pt-3 pe-5">
                  <span className="inline-flex w-8 h-8">
                    <Image className="rounded-full" src={student.image} width={32} height={32} alt={student.image} />
                  </span>
                </td>
                <td className="pt-4 pe-5">
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-gray-900 font-semibold">{student.name}</p>
                    <p className="text-gray-400 font-medium">{student.identification}</p>
                  </div>
                </td>
                <td className="pt-4 pe-5">
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-gray-900 font-semibold">{student.time}</p>
                    <p className="text-gray-400 font-medium">{student.date}</p>
                  </div>
                </td>
                <td className="text-gray-900 font-semibold pt-4 pe-5">{student.subject}</td>
                <td className="pt-4 pe-5">
                  <div className="flex flex-row items-center">
                    {student.status.toLowerCase() === 'aprobada' ? (
                      <CheckCircleIcon className="w-6 h-6 ml-[-0.2rem] text-white fill-approved" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 ml-[-0.2rem] text-white fill-failed" />
                    )}
                    <p className="text-gray-900 font-semibold">{student.status}</p>
                  </div>
                </td>
                <td className="text-gray-900 font-semibold pt-4 pe-5">{student.province}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-end">{student.age}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-end">{student.sex}</td>
                <td className="pt-4 pe-5">
                  <div className="flex flex-row gap-1">
                    <p className="text-gray-900 font-semibold">{student.disability}</p>
                    {student.disability.toLowerCase() === 'si' && <p className="text-gray-400 font-medium text-center">({student.percentageDisability}%)</p>}
                  </div>
                </td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-center">{student.failures}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-center">{student.aab1}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-center">{student.acdb1}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-center">{student.apeb1}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-center">{student.aab2}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-center">{student.acdb2}</td>
                <td className="text-gray-900 font-semibold pt-4 pe-5 text-center">{student.apeb2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
