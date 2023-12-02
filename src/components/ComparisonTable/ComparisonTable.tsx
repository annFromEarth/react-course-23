import { useAppSelector } from "../../services/redux/hook";
import style from "./comparisonTable.module.css";

export default function ComparisonTable() {
  const {
    nameInput,
    ageInput,
    emailInput,
    password,
    gender,
    termsAmdConditions,
    image,
    country,
  } = useAppSelector((state) => state.controlledForm);

  const {
    nameInputUnctrl,
    ageInputUnctrl,
    emailInputUnctrl,
    passwordUnctrl,
    genderUnctrl,
    termsAmdConditionsUnctrl,
    imageUnctrl,
    countryUnctrl,
  } = useAppSelector((state) => state.uncontrolledForm);

  return (
    <div className={style.tableContainer}>
      <div className={style.tableHeaderDATA}>DATA</div>
      <div className={style.tableHeaderSOURCE}>DATA SOURCE</div>
      <div className={style.tableHeader1}>controlled Table</div>
      <div className={style.tableHeader2}>uncontrolled Table</div>
      <div className={style.rowHeader}>name</div>
      <div className={style.rowControlled}>{nameInput}</div>
      <div className={style.rowUncontrolled}>{nameInputUnctrl}</div>
      <div className={style.rowHeader}>age</div>
      <div className={style.rowControlled}>{ageInput}</div>
      <div className={style.rowUncontrolled}>{ageInputUnctrl}</div>
      <div className={style.rowHeader}>email</div>
      <div className={style.rowControlled}>{emailInput}</div>
      <div className={style.rowUncontrolled}>{emailInputUnctrl}</div>
      <div className={style.rowHeader}>password</div>
      <div className={style.rowControlled}>{password}</div>
      <div className={style.rowUncontrolled}>{passwordUnctrl}</div>
      <div className={style.rowHeader}>gender</div>
      <div className={style.rowControlled}>{gender}</div>
      <div className={style.rowUncontrolled}>{genderUnctrl}</div>
      <div className={style.rowHeader}>T&C</div>
      <div className={style.rowControlled}>{termsAmdConditions}</div>
      <div className={style.rowUncontrolled}>{termsAmdConditionsUnctrl}</div>
      <div className={style.rowHeader}>image</div>
      <div className={style.rowControlled}>{image}</div>
      <div className={style.rowUncontrolled}>{imageUnctrl}</div>
      <div className={style.rowHeader}>country</div>
      <div className={style.rowControlled}>{country}</div>
      <div className={style.rowUncontrolled}>{countryUnctrl}</div>
    </div>
  );
}
