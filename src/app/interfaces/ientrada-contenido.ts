export interface IentradaContenido {
  id: string;
  autor: string;
  bilingue: boolean;
  body: string;
  bodyEn?: string;
  categoria: string;
  keywords: string;
  meta: string;
  resumen: string; // Para SEO
  textoSwitcher?: string;
  titulo: string;
}
