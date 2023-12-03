import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidationError } from "yup";
import { useAppDispatch } from "../../services/redux/hook";
import CountryAutocomplete, {
  CountryRef,
} from "../CountryAutocomplete/CountryAutocomplete";
import {
  updateAge,
  updateCountry,
  updateEmail,
  updateGender,
  updateImage,
  updateName,
  updatePassword,
  updateTerms,
} from "../../services/redux/uncontrolledFormSlice";

import schemaNewUser, { ErrorsForm } from "../../schemas";

import style from "./uncontrolledForm.module.css";
import PasswordStrengthCheck from "../PasswordStrengthCheck/PasswordStrengthCheck";

export default function UncontrolledForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const TandCInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<CountryRef>(null);

  const [errors, setErrors] = useState<ErrorsForm>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameInput = nameInputRef.current?.value;
    const ageInput = ageInputRef.current?.value;
    const emailInput = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    // eslint-disable-next-line no-nested-ternary
    const gender = maleRef.current?.checked
      ? maleRef.current.value
      : femaleRef.current?.checked
        ? femaleRef.current.value
        : undefined;
    const termsAndConditions = TandCInputRef.current?.checked;
    const image = imageInputRef.current?.files?.[0];
    const country = countryRef.current?.getCountry();

    const formData = {
      nameInput,
      ageInput,
      emailInput,
      password,
      confirmPassword,
      gender,
      termsAndConditions,
      image,
      country,
    };

    schemaNewUser
      .validate(formData, { abortEarly: false })
      .then(() => {
        setErrors({});

        let file: string | ArrayBuffer | null = null;
        const reader = new FileReader();
        if (image) {
          reader.readAsDataURL(image);
          reader.onloadend = () => {
            file = reader.result;
            const dispatchData = {
              ...formData,
              image: file,
            };

            dispatch(updateName(dispatchData.nameInput!));
            dispatch(updateAge(dispatchData.ageInput!));
            dispatch(updateEmail(dispatchData.emailInput!));
            dispatch(updatePassword(dispatchData.password!));
            dispatch(updateGender(dispatchData.gender!));
            dispatch(updateTerms(dispatchData.termsAndConditions!));
            dispatch(updateImage(dispatchData.image!));
            dispatch(updateCountry(dispatchData.country!));

            navigate("/");
          };
        }
      })
      .catch((err: ValidationError) => {
        const errorObj: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (typeof error.path === "string") {
            errorObj[error.path] = error.message;
          }
        });
        setErrors(errorObj);
      });
  }

  return (
    <>
      <div className={style.formHeader}>Uncontrolled Form</div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name: <input type="text" id="name" name="name" ref={nameInputRef} />
          <p className={style.error}>{errors.nameInput}</p>
        </label>
        <label htmlFor="age">
          Age: <input type="number" id="age" name="age" ref={ageInputRef} />
          <p className={style.error}>{errors.ageInput}</p>
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input type="email" id="email" name="email" ref={emailInputRef} />
          <p className={style.error}>{errors.emailInput}</p>
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordInputRef}
          />
          <PasswordStrengthCheck
            password={passwordInputRef.current?.value || ""}
          />
          <p className={style.error}>{errors.password}</p>
        </label>
        <label htmlFor="confirmPassword">
          Repeat password:{" "}
          <input
            type="password"
            id="confirmPassword"
            name="password"
            ref={confirmPasswordRef}
          />
          <p className={style.error}>{errors.confirmPassword}</p>
        </label>
        <label htmlFor="gender-select">
          Gender
          <label htmlFor="male">
            Male
            <input
              id="male"
              type="radio"
              value="male"
              ref={maleRef}
              name="gender"
            />
          </label>
          <label htmlFor="female">
            Female
            <input
              id="female"
              type="radio"
              value="female"
              ref={femaleRef}
              name="gender"
            />
          </label>
          <p className={style.error}>{errors.gender}</p>
        </label>
        <label htmlFor="T&C">
          I have read and accept T&C
          <input type="checkbox" id="T&C" name="T&C" ref={TandCInputRef} />
          <p className={style.error}>{errors.termsAndConditions}</p>
        </label>
        <label htmlFor="image">
          Image:{" "}
          <input type="file" id="image" name="image" ref={imageInputRef} />
          <p className={style.error}>{errors.image}</p>
        </label>
        <CountryAutocomplete ref={countryRef} />
        <p className={style.error}>{errors.country}</p>
        <button className={style.submitButton} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
