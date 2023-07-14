export const barChartDataProvinceStudents = [
  {
    name: 'Estudiantes Aprobados',
    data: [20, 30, 40, 20, 45, 50, 30, 80, 20, 10],
  },
  {
    name: 'Estudiantes Reprobados',
    data: [10, 10, 30, 50, 15, 20, 10, 50, 40, 30],
  },
]

export const barChartOptionsProvinceStudents = {
  chart: {
    toolbar: {
      show: false,
    },
    parentHeightOffset: 0,
    stacked: true,
    stackType: '100%',
  },
  legend: {
    position: 'top',
    fontSize: '12px',
    fontWeight: 600,
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      radius: 10,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      colors: ['#4b5563'],
    },
  },
  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
      },
    },
    theme: 'light',
  },
  xaxis: {
    categories: ['Azuay', 'Bolivar', 'Cañar', 'Carchi', 'Cotopaxi', 'El Oro', 'Esmeraldas', 'Guayas', 'Loja', 'Pichincha'],
    show: false,
    labels: {
      show: true,
      rotate: -45,
      style: {
        colors: '#A3AED0',
        fontSize: '14px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: 'black',
    labels: {
      show: true,
      style: {
        colors: '#CBD5E0',
        fontSize: '14px',
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  colors: ['#6d9984', '#ee5d50'],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      columnWidth: '20px',
    },
  },
}
