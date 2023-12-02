/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CountryEnum, GenderEnum, IFormInputUnctrl } from "../../types/types";

const initialState: IFormInputUnctrl = {
  nameInputUnctrl: "",
  ageInputUnctrl: "",
  emailInputUnctrl: "",
  passwordUnctrl: "",
  passwordRepeatUnctrl: "",
  genderUnctrl: null,
  termsAmdConditionsUnctrl: "",
  imageUnctrl: "",
  countryUnctrl: null,
};

export const uncontrolledFormSlice = createSlice({
  name: "uncontrolledFormSlice",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.nameInputUnctrl = action.payload;
    },
    updateAge: (state, action: PayloadAction<string>) => {
      state.ageInputUnctrl = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.emailInputUnctrl = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.passwordUnctrl = action.payload;
    },
    updateGender: (state, action: PayloadAction<GenderEnum>) => {
      state.genderUnctrl = action.payload;
    },
    updateTerms: (state, action: PayloadAction<string>) => {
      state.termsAmdConditionsUnctrl = action.payload;
    },
    updateImage: (state, action: PayloadAction<string>) => {
      state.imageUnctrl = action.payload;
    },
    updateCountry: (state, action: PayloadAction<CountryEnum>) => {
      state.countryUnctrl = action.payload;
    },
  },
});

export const {
  updateName,
  updateAge,
  updateEmail,
  updatePassword,
  updateGender,
  updateTerms,
  updateImage,
  updateCountry,
} = uncontrolledFormSlice.actions;

export default uncontrolledFormSlice.reducer;
