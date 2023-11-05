export type Planet = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbitalPeriod: string;
  population: string;
  residents: Array<string>;
  rotationPeriod: string;
  surfaceWater: string;
  terrain: string;
  url: string;
};

export type ApiData = {
  count: number;
  next: RequestInfo | URL | null;
  previous: RequestInfo | URL | null;
  results: Array<Planet>;
};
