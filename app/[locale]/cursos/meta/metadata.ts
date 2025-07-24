import { Metadata } from "next";

export const metadataContacto: Metadata = {
  title: "Cursos Página",
  description: "Descripción de la página principal",
  openGraph: {
    title: "Página Principal",
    description: "Descripción de la página principal",
    images: [
      {
        url: "/mi-pagina-principal.jpg",
        width: 1200,
        height: 630,
        alt: "Página Principal",
      },
    ],
  },
};
