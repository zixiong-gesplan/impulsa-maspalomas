import type { Path } from "./Path";

export type Stand = {
  src: string;
  label: string;
  title: string;
  description: string;
  chip: string;
  audio: string;
  id: string;
  pathId: string;
  path: Path | null;
  next: {
    label: string;
    url: string;
  } | null;
  prev: {
    label: string;
    url: string;
  } | null;
};
