export const gradesInputs = {
  data: [
    {
      size: 'col-span-6 md:col-span-4',
      label: 'Materia',
      type: 'select',
      required: true,
      id: 'subject',
      name: 'subject',
      placeholder: 'Seleccione una materia',
      items: [
        { value: 'Comunicacion De Datos' },
        { value: 'Fundamentos De Hardware' },
        { value: 'Estructuras Discretas' },
        { value: 'Estructuras De Datos' },
        { value: 'Comunicacion Tecnica Y Profesi' },
        { value: 'Fundamentos De Interaccion Hum' },
        { value: 'Metodologia De La Invest Y Tec' },
        { value: 'Computacion Y Sociedad' },
        { value: 'Fundamentos De Tecnologias' },
        { value: 'Arquitectura De Computadoras' },
        { value: 'Modelado De Sistemas' },
        { value: 'Practicum Ii' },
        { value: 'Estadistica Para Las Ing Y Arq' },
        { value: 'Calculo Diferencial' },
        { value: 'Fundamentos De Ingenieria De S' },
        { value: 'Fundamentos De Base De Datos' },
        { value: 'Administracion De Base De Dato' },
        { value: 'Algoritmos Y Resolucion De Pro' },
        { value: 'Computacion Ubicua' },
        { value: 'Fundamentos De Programacion' },
        { value: 'Programacion Orientada A Objet' },
        { value: 'Tecnologias Web' },
        { value: 'Desarrollo Web' },
        { value: 'Etica Y Moral' },
        { value: 'Humanismo, Universidad Y Cultu' },
        { value: 'Antropologia Basica' },
        { value: 'Fundamentos Matematicos' },
        { value: 'Algebra Lineal' },
        { value: 'Calculo Integral' },
        { value: 'Redes De Dispositivos' },
        { value: 'Arquitectura De Redes' },
        { value: 'Plataformas Emergentes' },
        { value: 'Gestion De Proyectos' },
        { value: 'Practicum I' },
        { value: 'Planificacion Estrategica Y Si' },
        { value: 'Metodologias De Desarrollo' },
        { value: 'Gestion De La Calidad Del Soft' },
        { value: 'Ingenieria De Requisitos' },
        { value: 'Arquitectura De Software' },
        { value: 'Arquitectura Empresarial' },
        { value: 'Modelado Del Usuario' },
        { value: 'Practicum Iii Servicio Comunit' },
        { value: 'Desarrollo Basado En Plat Web' },
        { value: 'Desarrollo Basado En Plataf Mo' },
        { value: 'Sistemas Distribuidos' },
        { value: 'Aplicacion De Intera Huma Comp' },
        { value: 'Aplicacion De Matematicas Y Es' },
        { value: 'Organizacion Y Admin De Infrae' },
        { value: 'Fundamentos Y Aplicacion De Se' },
        { value: 'Practicum 4.1' },
        { value: 'Programacion Integrativa' },
        { value: 'Gobernanza De Tecnol De Infor' },
        { value: 'Proyectos De Tecnolo De Inform' },
        { value: 'Practicum 4.2' },
        { value: 'Evaluacion De La Segur En Sist' },
        { value: 'Composicion De Textos Cientifi' },
        { value: 'Emprendimiento' },
      ],
      defaultValue: -1,
      searchable: true,
    },
    {
      size: 'col-span-6 md:col-span-2',
      label: 'Número de reprobaciones',
      type: 'number',
      required: true,
      id: 'number-failures',
      name: 'number-failures',
      placeholder: 'Ej. 0',
      min: 0,
      max: 100,
    },
    {
      size: 'col-span-3 md:col-span-2',
      label: 'AAB1',
      type: 'number',
      required: false,
      id: 'aab1',
      name: 'aab1',
      placeholder: 'Ej. 0',
      min: 0,
      max: 10,
    },
    {
      size: 'col-span-3 md:col-span-2',
      label: 'ACDB1',
      type: 'number',
      required: false,
      id: 'acbd1',
      name: 'acdb1',
      placeholder: 'Ej. 0',
      min: 0,
      max: 10,
    },
    {
      size: 'col-span-3 md:col-span-2',
      label: 'APEB1',
      type: 'number',
      required: false,
      id: 'apeb1',
      name: 'apeb1',
      placeholder: 'Ej. 0',
      min: 0,
      max: 10,
    },
    {
      size: 'col-span-3 md:col-span-2',
      label: 'AAB2',
      type: 'number',
      required: false,
      id: 'aab2',
      name: 'aab2',
      placeholder: 'Ej. 0',
      min: 0,
      max: 10,
    },
    {
      size: 'col-span-3 md:col-span-2',
      label: 'ACDB2',
      type: 'number',
      required: false,
      id: 'acbd2',
      name: 'acdb2',
      placeholder: 'Ej. 0',
      min: 0,
      max: 10,
    },
    {
      size: 'col-span-3 md:col-span-2',
      label: 'APEB2',
      type: 'number',
      required: false,
      id: 'apeb2',
      name: 'apeb2',
      placeholder: 'Ej. 0',
      min: 0,
      max: 10,
    },
  ],
}
