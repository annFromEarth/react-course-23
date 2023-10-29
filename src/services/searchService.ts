import { baseAPI, errorAPI } from '../constants/apiEndpoints';
import { ApiData } from './types';

export default class SearchService {
  static async getData(): Promise<ApiData> {
    const response = await fetch(`${baseAPI}planets/`, {
      headers: {},
    });
    const data: ApiData = await response.json();
    return data;
  }

  static async searchData(searchParam: string | null): Promise<ApiData> {
    const response = await fetch(`${baseAPI}planets/?search=${searchParam}`, {
      headers: {},
    });
    const data: ApiData = await response.json();
    return data;
  }

  static async getError(): Promise<ApiData> {
    const response = await fetch(`${errorAPI}/planets/`, {
      headers: {},
    });
    const data: ApiData = await response.json();
    return data;
  }
}
