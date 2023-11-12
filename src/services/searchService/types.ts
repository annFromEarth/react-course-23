export type Planet = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export type ApiData = {
  count: number;
  next: RequestInfo | URL | null;
  previous: RequestInfo | URL | null;
  results: Array<Planet>;
};
