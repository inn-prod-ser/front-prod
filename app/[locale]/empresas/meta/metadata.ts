import { Metadata } from "next";

export const metadataContacto: Metadata = {
  title: "Empresas",
  description: "Descripción de la página de empresas",
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
