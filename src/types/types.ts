export type Gender = "female" | "male" | "other";

export enum CountryEnum {
  uk = "UK",
  us = "US",
  it = "Italy",
}

export interface IFormInput {
  nameInput: string | undefined;
  ageInput: number | string | undefined;
  emailInput: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  gender: string | undefined;
  termsAndConditions: boolean | undefined;
  image: string | ArrayBuffer | null | FileList | File;
  country: string | undefined;
}

export type FileUpload = {
  lastModified: number;
  name: string;
  size: number;
  type: string; // "image/jpeg"
  webkitRelativePath: string;
};
