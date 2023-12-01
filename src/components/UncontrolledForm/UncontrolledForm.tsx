import { useRef } from "react";
import style from "./uncontrolledForm.module.css";

export default function UncontrolledForm() {
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordInputRepeatRef = useRef(null);
  const genderInputRef = useRef(null);
  const TandCInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const countrySelectRef = useRef(null);

  function handleSubmit() {
    if (nameInputRef.current && nameInputRef.current.value)
      alert(`Name: ${nameInputRef.current.value}`);
  }
  return (
    <>
      <div className={style.formHeader}>Uncontrolled Form</div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name: <input type="text" id="name" name="name" ref={nameInputRef} />
        </label>
        <label htmlFor="age">
          Age: <input type="number" id="age" name="age" ref={ageInputRef} />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input type="email" id="email" name="email" ref={emailInputRef} />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordInputRef}
          />
        </label>
        <label htmlFor="passwordRepeat">
          Repeat password:{" "}
          <input
            type="password"
            id="passwordRepeat"
            name="password"
            ref={passwordInputRepeatRef}
          />
        </label>
        <label htmlFor="gender-select">
          Gender:{" "}
          <select id="gender-select" name="gender" ref={genderInputRef}>
            <option value="male">M</option>
            <option value="female">F</option>
          </select>
        </label>
        <label htmlFor="T&C">
          I have read and accept T&C:{" "}
          <input type="checkbox" id="T&C" name="T&C" ref={TandCInputRef} />
        </label>
        <label htmlFor="image">
          Image:{" "}
          <input type="file" id="image" name="image" ref={imageInputRef} />
        </label>
        <label htmlFor="country-select">
          Select a country:{" "}
          <select id="country-select" name="country" ref={countrySelectRef}>
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
