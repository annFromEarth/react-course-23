/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFormInput } from "../../types/types";

const initialState: IFormInput = {
  nameInput: undefined,
  ageInput: undefined,
  emailInput: undefined,
  password: undefined,
  confirmPassword: undefined,
  gender: undefined,
  termsAndConditions: false,
  image: null,
  country: undefined,
};

export const uncontrolledFormSlice = createSlice({
  name: "uncontrolledFormSlice",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.nameInput = action.payload;
    },
    updateAge: (state, action: PayloadAction<number | string>) => {
      state.ageInput = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.emailInput = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    updateTerms: (state, action: PayloadAction<boolean>) => {
      state.termsAndConditions = action.payload;
    },
    updateImage: (
      state,
      action: PayloadAction<string | ArrayBuffer | null | FileList | File>,
    ) => {
      state.image = action.payload;
    },
    updateCountry: (state, action: PayloadAction<string>) => {
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
} = uncontrolledFormSlice.actions;

export default uncontrolledFormSlice.reducer;
