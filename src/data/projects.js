export const projects = [
  {
    id: 'vivienda-compacta',
    number: '01',
    title: 'Vivienda compacta',
    shortDescription:
      'Reorganización de un espacio residencial para aprovechar mejor la superficie disponible y mejorar la circulación.',
    image: '/images/PROYECTO_VIVIENDA.jpg',
    imageAlt:
      'Interior de departamento contemporáneo de dimensiones moderadas, con distribución inteligente, almacenamiento integrado, madera y tonos neutros bajo luz natural.',
    need: 'El espacio residencial presentaba una distribución fragmentada que dificultaba el aprovechamiento de la superficie útil y generaba recorridos innecesarios entre zonas de uso cotidiano.',
    conditions:
      'Superficie limitada, orientación definida, estructura existente que condicionaba ciertas intervenciones y necesidad de mantener una escala residencial cálida y funcional.',
    decisions:
      'Se priorizó la continuidad espacial, la integración de almacenamiento en la arquitectura y la mejora de la circulación mediante una lectura más clara de las zonas de uso. Los materiales se seleccionaron por su honestidad y capacidad de generar calidez sin sobrecargar el espacio.',
    solution:
      'Propuesta conceptual de reorganización que redefine los recorridos, concentra el almacenamiento y permite una mejor relación entre áreas de estar, cocinar y descansar, respetando las condiciones del espacio original.',
  },
  {
    id: 'espacio-trabajo',
    number: '02',
    title: 'Espacio de trabajo',
    shortDescription:
      'Diseño de un entorno de trabajo que organiza actividades, recorridos y zonas de colaboración.',
    image: '/images/PROYECTO_OFICINA.jpg',
    imageAlt:
      'Oficina contemporánea de escala pequeña o mediana, con distribución clara, mobiliario funcional, luz natural y materiales sobrios.',
    need: 'Se requería un entorno de trabajo que permitiera organizar distintas actividades —concentración, reuniones y colaboración— sin generar interferencias ni recorridos confusos.',
    conditions:
      'Espacio de escala media, acceso de luz natural por una de las fachadas, necesidad de flexibilidad para futuros ajustes y prioridad por materiales durables y de mantenimiento sencillo.',
    decisions:
      'Se definió una secuencia clara de zonas según el tipo de actividad, se separaron visualmente los recorridos de las áreas de trabajo y se integró el mobiliario como elemento organizador del espacio.',
    solution:
      'Diseño conceptual de un entorno de trabajo que ordena las actividades, facilita la colaboración cuando es necesaria y mantiene zonas de concentración, con una estética sobria y funcional.',
  },
  {
    id: 'reforma-residencial',
    number: '03',
    title: 'Reforma residencial',
    shortDescription:
      'Intervención de un espacio existente para mejorar su distribución, iluminación y uso cotidiano.',
    image: '/images/PROYECTO_REFORMA.jpg',
    imageAlt:
      'Espacio residencial reformado que muestra la relación entre materiales, iluminación y circulación, con encuadre arquitectónico profesional.',
    need: 'La vivienda existente presentaba una distribución que no respondía a los hábitos actuales de uso, con zonas oscuras y una relación poco clara entre las áreas de estar y de servicio.',
    conditions:
      'Estructura y envolvente existentes a respetar en gran medida, necesidad de mejorar la entrada de luz natural y de actualizar la relación entre materiales y usos cotidianos.',
    decisions:
      'Se reorganizaron los flujos internos, se abrieron visuales hacia las zonas de mayor iluminación y se eligieron materiales que dialogaran con la preexistencia sin imponer una estética forzada.',
    solution:
      'Propuesta de reforma que mejora la distribución, la iluminación y el uso cotidiano del espacio, manteniendo la coherencia con las condiciones originales del inmueble.',
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}
