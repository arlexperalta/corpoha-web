// NOTA: El mapeo imagen→obra es tentativo (orden del PDF del portafolio).
// Revisar visualmente y renombrar PNGs si hay mismatch.

import rosita from '@assets/portfolio/rosita.png';
import rolyDetalle from '@assets/portfolio/roly-detalle.png';
import ouiBistro from '@assets/portfolio/oui-bistro.png';
import padelNuestro from '@assets/portfolio/padel-nuestro.png';
import padelPoint from '@assets/portfolio/padel-point.png';
import lubripartes from '@assets/portfolio/lubripartes.png';
import elCamaron from '@assets/portfolio/el-camaron.png';
import termogeneradores from '@assets/portfolio/termogeneradores.png';
import peajeUchire from '@assets/portfolio/peaje-uchire.png';
import tuneles from '@assets/portfolio/tuneles.png';
import viviendaMansion from '@assets/portfolio/vivienda-mansion.png';
import villaPiscina from '@assets/portfolio/villa-piscina.png';

export type ProjectCategory = 'comercial' | 'industrial' | 'desarrollo' | 'residencial';

export interface Project {
  id: string;
  name: string;
  location: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  area: string;
  duration: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const projectCategories: Record<ProjectCategory, string> = {
  comercial: 'Comercial',
  industrial: 'Industrial',
  desarrollo: 'Desarrollo',
  residencial: 'Residencial',
};

export const categoryFilters = ['Todos', 'Comercial', 'Residencial', 'Industrial', 'Desarrollo'];

export const projects: Project[] = [
  {
    id: 'rosita',
    name: 'Panadería Rosita',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Remodelación integral de sede principal ejecutada sin interrumpir la producción diaria. Obra compleja en entorno operativo activo.',
    image: rosita,
    imageAlt: 'Panadería Rosita — remodelación integral, Caracas',
  },
  {
    id: 'roly',
    name: 'Tienda Roly',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '180 m²',
    duration: '6 sem',
    description:
      'Renovación completa del diseño interior con acabados de estándares europeos, iluminación moderna y optimización de espacios.',
    image: rolyDetalle,
    imageAlt: 'Tienda Roly — interior remodelado con estándares europeos, Caracas',
  },
  {
    id: 'oui-bistro',
    name: 'Oui Bistro & Lounge',
    location: 'Las Mercedes, Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2023',
    area: '220 m²',
    duration: '—',
    description:
      'Remodelación de bistró francés con mejoras en terraza y sistemas de iluminación que realzan la elegancia del concepto.',
    image: ouiBistro,
    imageAlt: 'Oui Bistro Lounge — remodelación de bistró francés, Las Mercedes',
  },
  {
    id: 'padel-nuestro',
    name: 'Pádel Nuestro',
    location: 'El Hatillo, Miranda',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '200–300 m²',
    duration: '4–6 sem',
    description:
      'Construcción de tienda con materiales sostenibles (LED, pinturas bajo VOC) y tecnología BIM aplicada al modelado 3D.',
    image: padelNuestro,
    imageAlt: 'Pádel Nuestro — tienda comercial 200-300 m², El Hatillo',
  },
  {
    id: 'padel-point',
    name: 'Pádel Point',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '—',
    duration: '1 sem',
    description:
      'Tienda comercial especializada con acabados en concreto pulido. Construcción integral completada en una semana por urgencia del cliente.',
    image: padelPoint,
    imageAlt: 'Pádel Point — tienda con acabado concreto pulido, Caracas',
  },
  {
    id: 'lubripartes',
    name: 'Autolavado Lubripartes',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Rehabilitación integral de espacio abandonado. Intervención de fachada, recuperación estructural y adecuación general para reapertura.',
    image: lubripartes,
    imageAlt: 'Autolavado Lubripartes — rehabilitación integral',
  },
  {
    id: 'el-camaron',
    name: 'Restaurante El Camarón',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Remodelación integral con demolición completa hasta piso y techo. Obra ejecutada por fases manteniendo la operatividad del restaurante.',
    image: elCamaron,
    imageAlt: 'Restaurante El Camarón — remodelación integral por fases',
  },
  {
    id: 'termogeneradores',
    name: 'Termogeneradores La Raisa',
    location: 'Valles del Tuy, Miranda',
    category: 'industrial',
    categoryLabel: 'Industrial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Infraestructura industrial de gran envergadura: fundaciones con estudios geotécnicos, trincheras de concreto y bases para termogeneradores eléctricos.',
    image: termogeneradores,
    imageAlt: 'Construcción de termogeneradores — infraestructura industrial, Valles del Tuy',
  },
  {
    id: 'peaje-uchire',
    name: 'Peaje Boca de Uchire',
    location: 'Miranda / Anzoátegui',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Construcción y rehabilitación estratégica. Desarrollo regional con materiales de alta calidad y tecnologías avanzadas.',
    image: peajeUchire,
    imageAlt: 'Peaje de Boca de Uchire — construcción en frontera Miranda/Anzoátegui',
  },
  {
    id: 'tuneles',
    name: 'Reparación de Túneles',
    location: 'Venezuela',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Rehabilitación con inyección de poliuretano para sellado de grietas, resane y tratamiento de juntas de dilatación.',
    image: tuneles,
    imageAlt: 'Reparación y rehabilitación de túnel — intervención técnica especializada',
  },
  {
    id: 'vivienda-mansion',
    name: 'Remodelación de Mansión',
    location: 'Caracas',
    category: 'residencial',
    categoryLabel: 'Residencial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Intervención total con rediseño de baños y sistemas de pintura de alto rendimiento. Optimización espacial y excelencia constructiva.',
    image: viviendaMansion,
    imageAlt: 'Remodelación de mansión — intervención integral residencial',
  },
  {
    id: 'villa-piscina',
    name: 'Villa con Piscina',
    location: 'Caracas',
    category: 'residencial',
    categoryLabel: 'Residencial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Ejecución técnica de alta complejidad con granito de gran formato en piscina. Renovación integral de áreas privadas: baños y habitaciones.',
    image: villaPiscina,
    imageAlt: 'Villa con piscina — remodelación con granito de gran formato',
  },
];
