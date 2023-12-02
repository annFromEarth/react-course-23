export enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export enum CountryEnum {
  uk = "UK",
  us = "US",
  it = "Italy",
}

export interface IFormInput {
  nameInput: string;
  ageInput: string;
  emailInput: string;
  password: string;
  passwordRepeat: string;
  gender: GenderEnum | null;
  termsAmdConditions: string;
  image: FileUpload[];
  country: CountryEnum | null;
}

export interface IFormInputStore {
  nameInput: string;
  ageInput: string;
  emailInput: string;
  password: string;
  passwordRepeat: string;
  gender: GenderEnum | null;
  termsAmdConditions: string;
  image: string;
  country: CountryEnum | null;
}

export interface IFormInputUnctrl {
  nameInputUnctrl: string;
  ageInputUnctrl: string;
  emailInputUnctrl: string;
  passwordUnctrl: string;
  passwordRepeatUnctrl: string;
  genderUnctrl: GenderEnum | null;
  termsAmdConditionsUnctrl: string;
  imageUnctrl: string;
  countryUnctrl: CountryEnum | null;
}

export type FileUpload = {
  lastModified: number;
  name: string;
  size: number;
  type: string; // "image/jpeg"
  webkitRelativePath: string;
};
