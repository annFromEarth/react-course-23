import { ApiData } from './types';

export default class SearchService {
  static async getData(): Promise<ApiData> {
    const response = await fetch('http://swapi.dev/api/planets/', {
      headers: {},
    });
    const data: ApiData = await response.json();
    return data;
  }
}
