import type { Path } from "../types/Path";

export const PATH_1: Path = {
  src: "/impulsa-maspalomas/Sendero_1.png",
  kmz: "/impulsa-maspalomas/Sendero_1.kmz",
  title: "Sendero 1: Dunas de biodiversidad",
  description: `Este sendero conecta el Parque Reserva Tony Gallardo con el Mirador Dunas (RIU) y atraviesa la zona de dunas estabilizadas donde se pueden observar especies vegetales clave como son los balos, los tarajales y las aulagas.`,
  guide: {
    length: '2,3 km',
    difficulty: 'Fácil'
  },
};

export const PATH_2: Path = {
  src: "/impulsa-maspalomas/Sendero_2.png",
  kmz: "/impulsa-maspalomas/Sendero_2.kmz",
  title: "Sendero 2: Un refugio en el oasis",
  description: `Este sendero es el más corto de todos, y conecta el Parque Reserva Tony Gallardo con el Mirador Dunas (RIU) al igual que el sendero 1. Durante el recorrido, se pueden contemplar numerosas dunas en distintos estados de evolución, generalmente asociadas a tarajales.`,
  guide: {
    length: '1,7 km',
    difficulty: 'Fácil'
  },
};

export const PATH_3: Path = {
  src: "/impulsa-maspalomas/Sendero_3.png",
  kmz: "/impulsa-maspalomas/Sendero_3.kmz",
  title: "Sendero 3: El paraíso de la avifauna",
  description: `Este sendero es el más largo de todos, y está dividido en dos senderos: el 3A, que sale del Mirados Dunas y llega a la Charca de Maspalomas; el 3B, que rodea la zona de máxima protección y conecta con el Parque Reserva Tony Gallardo.`,
  guide: {
    length: '(A) 2,8 km - (B) 1,5 km',
    difficulty: 'Fácil'
  },
};

export const PATHS: Path[] = [
  PATH_1,
  PATH_2,
  PATH_3,
];