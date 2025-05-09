import { type Path } from "../types/Path";
import {
  STAND_1_1,
  STAND_1_2,
  STAND_1_3,
  STAND_1_4,
  STAND_1_5,
  STAND_1_6,
  STAND_1_7,
} from "./STANDS";

export const PATH_1: Path = {
  src: "/src/assets/Sendero_1.png",
  title: "Sendero 1: Dunas de biodiversidad",
  description: `Esta ruta te llevará a descubrir la influencia de la actividad humana
          en el entorno natural de Maspalomas. A lo largo del recorrido, podrás
          observar la interacción entre la naturaleza y las actividades humanas,
          así como los esfuerzos de conservación y restauración que se están
          llevando a cabo en la zona.`,
  guide: {},
  stands: [
    STAND_1_1,
    STAND_1_2,
    STAND_1_3,
    STAND_1_4,
    STAND_1_5,
    STAND_1_6,
    STAND_1_7,
  ],
};
