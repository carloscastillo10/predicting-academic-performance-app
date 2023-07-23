import React, { Dispatch } from 'react'
import styles from '@styles/Modal.module.css'

interface Props {
  setOpenModal: Dispatch<boolean>
}

export function ClassifiedStudentLayout({ setOpenModal }: Props): React.JSX.Element {
  return (
    <>
      <div className={`${styles.content}`}>
        <div className="flex justify-center flex-col mt-4">
          <div className="mx-auto flex flex-shrink-0 justify-center items-center">
            <svg className={`${styles.icon} ${styles.success} block m-auto w-9 h-9 `} viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
              <g fill="none" stroke="hsl(138,90%,50%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle className={`${styles.circle}`} cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12" />
                <polyline className={`${styles.polyne}`} points="7 12.5 10 15.5 17 8.5" stroke-dasharray="14.2 14.2" />
              </g>
            </svg>
          </div>
          <div className="mt-3 text-center">
            <h2 className="text-gray-950 text-xl font-bold">Clasificado exitosamente</h2>
          </div>
          <div className="mt-6">
            <p className="flex items-center gap-1 text-sm text-gray-600 font-medium">
              El estudiante ha
              <span className="flex justify-center items-center bg-approved text-white font-bold px-1 rounded-lg">aprobado</span>
              en
              <span className="font-bold">Ingeniería Web</span>
            </p>
          </div>
        </div>

        <div className="bg-gray-50 flex justify-center mt-10">
          <button
            className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-full md:w-36 m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:font-bold active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom"
            type="button"
            onClick={() => setOpenModal(false)}
          >
            Entendido
          </button>
        </div>
      </div>
    </>
  )
}
