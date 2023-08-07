export const getAllProvinces = () => {
  const response = {
    data: [
      { value: 'Azuay' },
      { value: 'Bolivar' },
      { value: 'Cañar' },
      { value: 'Carchi' },
      { value: 'Chimborazo' },
      { value: 'Cotopaxi' },
      { value: 'El Oro' },
      { value: 'Esmeraldas' },
      { value: 'Galapagos' },
      { value: 'Guayas' },
      { value: 'Imbabura' },
      { value: 'Loja' },
      { value: 'Los Rios' },
      { value: 'Manabí' },
      { value: 'Morona Santiago' },
      { value: 'Napo' },
      { value: 'No definido' },
      { value: 'Orellana' },
      { value: 'Pastaza' },
      { value: 'Pichincha' },
      { value: 'Santa Elena' },
      { value: 'Santo Domingo de los Tsáchilas' },
      { value: 'Sucumbíos' },
      { value: 'Tungurahua' },
      { value: 'Zamora Chinchipe' },
    ],
  }

  return {
    items: response.data,
    defaultValue: 11,
  }
}
