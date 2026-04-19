export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'remodelacion',
    title: 'Remodelación',
    description:
      'Transformamos espacios residenciales y comerciales con diseño innovador, materiales duraderos y cumplimiento de regulaciones locales.',
    icon: 'home',
  },
  {
    id: 'construccion',
    title: 'Proyectos de Construcción',
    description:
      'Gestionamos proyectos ambiciosos, desde licitaciones públicas hasta desarrollos comerciales, con tecnología BIM y enfoque sostenible.',
    icon: 'building',
  },
  {
    id: 'consultoria',
    title: 'Consultoría y Gestión de Proyectos',
    description:
      'Asesoría técnica integral: planificación estratégica, estimaciones de costos, cronogramas detallados y capacitación. Ejecución impecable.',
    icon: 'clipboard',
  },
  {
    id: 'estructural',
    title: 'Diseño y Cálculo Estructural',
    description:
      'Análisis de cargas, dimensionamiento de elementos y supervisión técnica en obra. Seguridad, estabilidad y cumplimiento de normativas locales.',
    icon: 'structure',
  },
];
