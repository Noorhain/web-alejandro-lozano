// Las miniaturas contienen la información de la entrada resumida. Al hacer click en ellas se accede al contenido

export interface IentradaMiniatura {
  id: string;
  autor?: string; // Aún no trabajamos con estos datos
  categoria?: { // Solo se requiere en la sección Blog, no en  Home
    nombreCategoria: string;
  };
  contenido: string;
  fechaPublicacion: Date;
  imagenMiniatura?: string; // Solo en Blog, no en Home
  resumen?: string; // Solo se requiere en la sección Blog, no en  Home
  titulo: string;
}
