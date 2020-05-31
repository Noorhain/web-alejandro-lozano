export interface IpublicacionMiniatura {
  id: string;
  anioPublicacion: string;
  autor?: [{}];
  contenido: string;
  imagenMiniatura: string;
  journal: string;
  keywords?: {
    en: string,
    es: string
  };
  subtitulo?: string;
  titulo: string;
}
