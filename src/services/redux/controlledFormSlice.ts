/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CountryEnum, GenderEnum, IFormInputStore } from "../../types/types";

const initialState: IFormInputStore = {
  nameInput: "",
  ageInput: "",
  emailInput: "",
  password: "",
  passwordRepeat: "",
  gender: null,
  termsAmdConditions: "",
  image: "",
  country: null,
};

export const controlledFormSlice = createSlice({
  name: "controlledFormSlice",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.nameInput = action.payload;
    },
    updateAge: (state, action: PayloadAction<string>) => {
      state.ageInput = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.emailInput = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateGender: (state, action: PayloadAction<GenderEnum>) => {
      state.gender = action.payload;
    },
    updateTerms: (state, action: PayloadAction<string>) => {
      state.termsAmdConditions = action.payload;
    },
    updateImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    updateCountry: (state, action: PayloadAction<CountryEnum>) => {
      state.country = action.payload;
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
} = controlledFormSlice.actions;

export default controlledFormSlice.reducer;
