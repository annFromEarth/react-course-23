/* eslint-disable react/jsx-props-no-spreading */
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  updateAge,
  updateCountry,
  updateEmail,
  updateGender,
  updateImage,
  updateName,
  updatePassword,
  updateTerms,
} from "../../services/redux/controlledFormSlice";
import { useAppDispatch } from "../../services/redux/hook";
import { IFormInput } from "../../types/types";

import style from "./controlledForm.module.css";

export default function ControlledForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //   function encodeImageFileAsURL(element) {
  //     const file = element.files[0];
  //     const reader = new FileReader();
  //     reader.onloadend = function () {
  //       console.log("RESULT", reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.country && data.ageInput && data.gender) {
      dispatch(updateName(data.nameInput));
      dispatch(updateAge(data.ageInput));
      dispatch(updateEmail(data.emailInput));
      dispatch(updatePassword(data.password));
      dispatch(updateGender(data.gender));
      dispatch(updateTerms(data.termsAmdConditions.toString()));
      dispatch(updateImage(data.image[0].name));
      dispatch(updateCountry(data.country));
      navigate("../");
    }
  };

  return (
    <>
      <div className={style.formHeader}>Controlled Form</div>
      <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name:
          <input
            {...register("nameInput")}
            type="text"
            id="name"
            name="nameInput"
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            {...register("ageInput")}
            type="number"
            id="age"
            name="ageInput"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            {...register("emailInput")}
            type="email"
            id="email"
            name="emailInput"
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
            name="termsAmdConditions"
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
