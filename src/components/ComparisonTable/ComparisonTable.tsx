import { useAppSelector } from "../../services/redux/hook";
import style from "./comparisonTable.module.css";

export default function ComparisonTable() {
  const {
    nameInput,
    ageInput,
    emailInput,
    password,
    gender,
    termsAndConditions,
    image,
    country,
  } = useAppSelector((state) => state.controlledForm);

  const nameInputUnctrl = useAppSelector(
    (state) => state.uncontrolledForm.nameInput,
  );
  const ageInputUnctrl = useAppSelector(
    (state) => state.uncontrolledForm.ageInput,
  );
  const emailInputUnctrl = useAppSelector(
    (state) => state.uncontrolledForm.emailInput,
  );
  const passwordUnctrl = useAppSelector(
    (state) => state.uncontrolledForm.password,
  );
  const genderUnctrl = useAppSelector((state) => state.uncontrolledForm.gender);
  const termsAndConditionsUnctrl = useAppSelector(
    (state) => state.uncontrolledForm.termsAndConditions,
  );
  const imageUnctrl = useAppSelector((state) => state.uncontrolledForm.image);
  const countryUnctrl = useAppSelector(
    (state) => state.uncontrolledForm.country,
  );

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
      <div className={style.rowControlled}>{termsAndConditions}</div>
      <div className={style.rowUncontrolled}>{termsAndConditionsUnctrl}</div>
      <div className={style.rowHeader}>image</div>
      <div className={style.rowControlled}>
        {typeof image === "string" ? (
          <img className={style.image} src={image} alt="from controlled form" />
        ) : (
          <span>No image</span>
        )}
      </div>
      <div className={style.rowUncontrolled}>
        {typeof imageUnctrl === "string" ? (
          <img
            className={style.image}
            src={imageUnctrl}
            alt="from uncontrolled form"
          />
        ) : (
          <span>No image</span>
        )}
      </div>
      <div className={style.rowHeader}>country</div>
      <div className={style.rowControlled}>{country}</div>
      <div className={style.rowUncontrolled}>{countryUnctrl}</div>
    </div>
  );
}
