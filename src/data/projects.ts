import type { ImageMetadata } from 'astro';

// Cargar todas las imágenes del portafolio. Astro las optimiza pasándolas
// por <Image> en los componentes consumidores.
const portfolioImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/portfolio/**/foto-*.{jpg,jpeg,png}',
  { eager: true }
);

function imagesForSlug(dirSlug: string, coverFile?: string): ImageMetadata[] {
  const all = Object.entries(portfolioImages)
    .filter(([path]) => path.includes(`/portfolio/${dirSlug}/`))
    .sort(([a], [b]) => a.localeCompare(b));

  if (!coverFile) return all.map(([, mod]) => mod.default);

  const coverIdx = all.findIndex(([path]) => path.endsWith(`/${coverFile}`));
  if (coverIdx === -1) {
    throw new Error(`coverFile "${coverFile}" no existe en ${dirSlug}`);
  }
  const [cover] = all.splice(coverIdx, 1);
  return [cover, ...all].map(([, mod]) => mod.default);
}

export type ProjectCategory = 'comercial' | 'industrial' | 'desarrollo' | 'residencial';

export interface Project {
  id: string;
  dirSlug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  area: string;
  duration: string;
  description: string;
  images: ImageMetadata[];
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
    dirSlug: '01-rosita',
    name: 'Panadería Rosita',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Remodelación integral de sede principal ejecutada sin interrumpir la producción diaria. Obra compleja en entorno operativo activo.',
    images: imagesForSlug('01-rosita', 'foto-02.jpg'),
    imageAlt: 'Panadería Rosita — remodelación integral, Caracas',
  },
  {
    id: 'roly',
    dirSlug: '02-roly',
    name: 'Tienda Roly',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '180 m²',
    duration: '6 sem',
    description:
      'Renovación completa del diseño interior con acabados de estándares europeos, iluminación moderna y optimización de espacios.',
    images: imagesForSlug('02-roly', 'foto-04.jpg'),
    imageAlt: 'Tienda Roly — interior remodelado con estándares europeos, Caracas',
  },
  {
    id: 'oui-bistro',
    dirSlug: '03-oui-bistro',
    name: 'Oui Bistro & Lounge',
    location: 'Las Mercedes, Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2023',
    area: '220 m²',
    duration: '—',
    description:
      'Remodelación de bistró francés con mejoras en terraza y sistemas de iluminación que realzan la elegancia del concepto.',
    images: imagesForSlug('03-oui-bistro', 'foto-06.jpg'),
    imageAlt: 'Oui Bistro Lounge — remodelación de bistró francés, Las Mercedes',
  },
  {
    id: 'padel-nuestro',
    dirSlug: '04-padel-nuestro',
    name: 'Pádel Nuestro',
    location: 'El Hatillo, Miranda',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '200–300 m²',
    duration: '4–6 sem',
    description:
      'Construcción de tienda con materiales sostenibles (LED, pinturas bajo VOC) y tecnología BIM aplicada al modelado 3D.',
    images: imagesForSlug('04-padel-nuestro', 'foto-02.jpg'),
    imageAlt: 'Pádel Nuestro — tienda comercial 200-300 m², El Hatillo',
  },
  {
    id: 'padel-point',
    dirSlug: '05-padel-point',
    name: 'Pádel Point',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2024',
    area: '—',
    duration: '1 sem',
    description:
      'Tienda comercial especializada con acabados en concreto pulido. Construcción integral completada en una semana por urgencia del cliente.',
    images: imagesForSlug('05-padel-point', 'foto-04.jpg'),
    imageAlt: 'Pádel Point — tienda con acabado concreto pulido, Caracas',
  },
  {
    id: 'lubripartes',
    dirSlug: '06-lubripartes',
    name: 'Autolavado Lubripartes',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Rehabilitación integral de espacio abandonado. Intervención de fachada, recuperación estructural y adecuación general para reapertura.',
    images: imagesForSlug('06-lubripartes', 'foto-04.jpg'),
    imageAlt: 'Autolavado Lubripartes — rehabilitación integral',
  },
  {
    id: 'el-camaron',
    dirSlug: '07-el-camaron',
    name: 'Restaurante El Camarón',
    location: 'Caracas',
    category: 'comercial',
    categoryLabel: 'Comercial',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Remodelación integral con demolición completa hasta piso y techo. Obra ejecutada por fases manteniendo la operatividad del restaurante.',
    images: imagesForSlug('07-el-camaron', 'foto-02.jpg'),
    imageAlt: 'Restaurante El Camarón — remodelación integral por fases',
  },
  {
    id: 'termogeneradores',
    dirSlug: '08-termogeneradores',
    name: 'Termogeneradores La Raisa',
    location: 'Valles del Tuy, Miranda',
    category: 'industrial',
    categoryLabel: 'Industrial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Infraestructura industrial de gran envergadura: fundaciones con estudios geotécnicos, trincheras de concreto y bases para termogeneradores eléctricos.',
    images: imagesForSlug('08-termogeneradores'),
    imageAlt: 'Construcción de termogeneradores — infraestructura industrial, Valles del Tuy',
  },
  {
    id: 'peaje-uchire',
    dirSlug: '09-peaje-uchire',
    name: 'Peaje Boca de Uchire',
    location: 'Miranda / Anzoátegui',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Construcción y rehabilitación estratégica. Desarrollo regional con materiales de alta calidad y tecnologías avanzadas.',
    images: imagesForSlug('09-peaje-uchire'),
    imageAlt: 'Peaje de Boca de Uchire — construcción en frontera Miranda/Anzoátegui',
  },
  {
    id: 'tuneles',
    dirSlug: '10-tuneles',
    name: 'Reparación de Túneles',
    location: 'Venezuela',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    year: '2023',
    area: '—',
    duration: '—',
    description:
      'Rehabilitación con inyección de poliuretano para sellado de grietas, resane y tratamiento de juntas de dilatación.',
    images: imagesForSlug('10-tuneles', 'foto-04.jpg'),
    imageAlt: 'Reparación y rehabilitación de túnel — intervención técnica especializada',
  },
  {
    id: 'vivienda-mansion',
    dirSlug: '11-vivienda-mansion',
    name: 'Remodelación de Mansión',
    location: 'Caracas',
    category: 'residencial',
    categoryLabel: 'Residencial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Intervención total con rediseño de baños y sistemas de pintura de alto rendimiento. Optimización espacial y excelencia constructiva.',
    images: imagesForSlug('11-vivienda-mansion', 'foto-03.jpg'),
    imageAlt: 'Remodelación de mansión — intervención integral residencial',
  },
  {
    id: 'villa-piscina',
    dirSlug: '12-villa-piscina',
    name: 'Villa con Piscina',
    location: 'Caracas',
    category: 'residencial',
    categoryLabel: 'Residencial',
    year: '2024',
    area: '—',
    duration: '—',
    description:
      'Ejecución técnica de alta complejidad con granito de gran formato en piscina. Renovación integral de áreas privadas: baños y habitaciones.',
    images: imagesForSlug('12-villa-piscina', 'foto-07.jpg'),
    imageAlt: 'Villa con piscina — remodelación con granito de gran formato',
  },
];
