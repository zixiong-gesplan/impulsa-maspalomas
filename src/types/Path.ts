export type Path = {
  src: string;
  title: string;
  description: string;
  kmz: string;
  guide: {
    length:string,
    time:string | null,
    difficulty:string,
    maximum_fee: string | null
  };
};
