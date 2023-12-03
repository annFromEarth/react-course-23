/* eslint-disable react/jsx-props-no-spreading */
import { useForm, SubmitHandler, Controller } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import {
  updateAge,
  updateConfirmPassword,
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
import schemaNewUser from "../../schemas";

import style from "./controlledForm.module.css";
import CountryAutocomplete from "../CountryAutocomplete/CountryAutocomplete";
import PasswordStrengthCheck from "../PasswordStrengthCheck/PasswordStrengthCheck";

export default function ControlledForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schemaNewUser),
    mode: "all",
  });

  const password = watch("password");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let file: string | ArrayBuffer | null = null;
    const reader = new FileReader();
    if (data.image && data.image instanceof File) {
      reader.readAsDataURL(data.image);
      reader.onloadend = () => {
        file = reader.result;
        const dispatchData = {
          ...data,
          image: file,
        };

        dispatch(updateName(dispatchData.nameInput!));
        dispatch(updateAge(dispatchData.ageInput!));
        dispatch(updateEmail(dispatchData.emailInput!));
        dispatch(updatePassword(dispatchData.password!));
        dispatch(updateConfirmPassword(dispatchData.confirmPassword!));
        dispatch(updateGender(dispatchData.gender!));
        dispatch(updateTerms(dispatchData.termsAndConditions!));
        dispatch(updateImage(dispatchData.image!));
        dispatch(updateCountry(dispatchData.country!));

        navigate("/");
      };
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
          <p className={style.error}>{errors.nameInput?.message}</p>
        </label>
        <label htmlFor="age">
          Age:
          <input {...register("ageInput")} type="number" id="age" name="age" />
          <p className={style.error}>{errors.ageInput?.message}</p>
        </label>
        <label htmlFor="email">
          Email:
          <input
            {...register("emailInput")}
            type="email"
            id="email"
            name="emailInput"
          />
          <p className={style.error}>{errors.emailInput?.message}</p>
        </label>
        <label htmlFor="password">
          Password:
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
          />
          <PasswordStrengthCheck password={password || ""} />
          <p className={style.error}>{errors.password?.message}</p>
        </label>
        <label htmlFor="confirmPassword">
          Confirm your password:
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <p className={style.error}>{errors.confirmPassword?.message}</p>
        </label>
        <label htmlFor="gender-select">
          Gender
          <label htmlFor="male">
            Male
            <input
              id="male"
              type="radio"
              value="male"
              {...register("gender")}
            />
          </label>
          <label htmlFor="female">
            Female
            <input
              id="female"
              type="radio"
              value="female"
              {...register("gender")}
            />
          </label>
          <p className={style.error}>{errors.gender?.message}</p>
        </label>
        <label htmlFor="T&C">
          I have read and accept T&C:
          <input
            {...register("termsAndConditions")}
            type="checkbox"
            id="T&C"
            name="termsAndConditions"
          />
          <p className={style.error}>{errors.termsAndConditions?.message}</p>
        </label>
        <label htmlFor="image">
          Image
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                id="image"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    field.onChange(e.target.files[0]);
                  }
                }}
                onBlur={field.onBlur}
              />
            )}
          />
          <p className={style.error}>{errors.image?.message}</p>
        </label>
        <label htmlFor="country">
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <CountryAutocomplete
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          <p className={style.error}>{errors.country?.message}</p>
        </label>
        <button
          className={style.submitButton}
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </form>
    </>
  );
}
