export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  meta: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Visita y diagnóstico técnico',
    description: 'Vamos al sitio, medimos, entendemos tu operación. Estudios geotécnicos si aplican.',
    meta: '1–3 días',
  },
  {
    number: '02',
    title: 'Modelado BIM + presupuesto',
    description: 'Ves tu obra en 3D antes de empezar. Presupuesto y cronograma detallados, sin sorpresas.',
    meta: '5–10 días',
  },
  {
    number: '03',
    title: 'Ejecución por fases',
    description: 'Obra coordinada para no interrumpir tu operación. Cumplimos plazos incluso con urgencia.',
    meta: 'Según scope',
  },
  {
    number: '04',
    title: 'Entrega y garantía',
    description: 'Limpieza, entrega formal, soporte postventa. Cumplimiento de normativas locales verificado.',
    meta: 'Postventa',
  },
];
