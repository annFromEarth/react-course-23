/* eslint-disable react/jsx-props-no-spreading */
import { useForm, SubmitHandler } from "react-hook-form";
import style from "./controlledForm.module.css";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

enum CountryEnum {
  uk = "UK",
  us = "US",
  it = "Italy",
}

interface IFormInput {
  nameInput: string;
  ageInput: number;
  emailInput: string;
  password: string;
  passwordRepeat: string;
  gender: GenderEnum;
  termsAmdConditions: boolean;
  image: string;
  country: CountryEnum;
}
export default function ControlledForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <div className={style.formHeader}>Controlled Form</div>
      <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name:
          <input {...register("nameInput")} type="text" id="name" name="name" />
        </label>
        <label htmlFor="age">
          Age:
          <input {...register("ageInput")} type="number" id="age" name="age" />
        </label>
        <label htmlFor="email">
          Email:
          <input
            {...register("emailInput")}
            type="email"
            id="email"
            name="email"
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
          />
        </label>
        <label htmlFor="passwordRepeat">
          Repeat password:
          <input
            {...register("passwordRepeat")}
            type="password"
            id="passwordRepeat"
            name="password"
          />
        </label>
        <label htmlFor="gender-select">
          Gender:
          <select {...register("gender")} id="gender-select" name="gender">
            <option value="male">M</option>
            <option value="female">F</option>
          </select>
        </label>
        <label htmlFor="T&C">
          I have read and accept T&C:
          <input
            {...register("termsAmdConditions")}
            type="checkbox"
            id="T&C"
            name="T&C"
          />
        </label>
        <label htmlFor="image">
          Image:{" "}
          <input {...register("image")} type="file" id="image" name="image" />
        </label>
        <label htmlFor="country-select">
          Select a country:
          <select {...register("country")} id="country-select" name="country">
            <option value="uk">UK</option>
            <option value="us">US</option>
          </select>
        </label>
        <button className={style.submitButton} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
