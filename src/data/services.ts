export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'remodelacion',
    num: '01',
    title: 'Remodelación',
    description:
      'Transformamos espacios residenciales y comerciales con diseño innovador, materiales duraderos y cumplimiento de regulaciones locales.',
    tags: ['Comercial', 'Residencial', 'Oficinas'],
  },
  {
    id: 'construccion',
    num: '02',
    title: 'Proyectos de Construcción',
    description:
      'Gestionamos proyectos ambiciosos, desde licitaciones públicas hasta desarrollos comerciales, con tecnología BIM y enfoque sostenible.',
    tags: ['BIM', 'Licitaciones', 'Sostenible'],
  },
  {
    id: 'consultoria',
    num: '03',
    title: 'Consultoría y Gestión',
    description:
      'Asesoría técnica integral: planificación estratégica, estimaciones de costos, cronogramas detallados y capacitación. Ejecución impecable.',
    tags: ['Planificación', 'Costos', 'Cronograma'],
  },
  {
    id: 'estructural',
    num: '04',
    title: 'Diseño y Cálculo Estructural',
    description:
      'Análisis de cargas, dimensionamiento de elementos y supervisión técnica en obra. Seguridad, estabilidad y cumplimiento de normativas locales.',
    tags: ['Análisis', 'Supervisión', 'Normativa'],
  },
];
