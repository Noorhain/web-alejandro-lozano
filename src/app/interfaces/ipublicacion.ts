export interface Ipublicacion {
  id: string;
  abstract: {
    en: {
      keywords: string;
      text: string;
    },
    es?: {
      keywords: string;
      text: string;
    }
  };
  autor: [{}];
  body?: string;
  enlaceExterno?: string;
  imagenCover?: string;
  journal: {
    anio: string;
    editor?: string;
    nombre: string;
    paginaFin: string;
    paginaInicio: string;
    volumen: string;
    numero?: string;
  };
  resumen: string; // Para SEO
  subtitulo: string;
  titulo: string;
}
