import style from "./comparisonTable.module.css";

export default function ComparisonTable() {
  return (
    <div className={style.tableContainer}>
      <div className={style.tableHeaderDATA}>DATA</div>
      <div className={style.tableHeaderSOURCE}>DATA SOURCE</div>
      <div className={style.tableHeader1}>Controlled Table</div>
      <div className={style.tableHeader2}>Uncontrolled Table</div>
      <div className={style.rowHeader}>name</div>
      <div className={style.rowControlled}>name crld</div>
      <div className={style.rowUncontrolled}>name uncrld</div>
      <div className={style.rowHeader}>age</div>
      <div className={style.rowControlled}>age crld</div>
      <div className={style.rowUncontrolled}>age uncrld</div>
      <div className={style.rowHeader}>email</div>
      <div className={style.rowControlled}>email crld</div>
      <div className={style.rowUncontrolled}>email uncrld</div>
      <div className={style.rowHeader}>password</div>
      <div className={style.rowControlled}>passworg crld</div>
      <div className={style.rowUncontrolled}>passworg uncrld</div>
      <div className={style.rowHeader}>gender</div>
      <div className={style.rowControlled}>gender crld</div>
      <div className={style.rowUncontrolled}>gender uncrld</div>
      <div className={style.rowHeader}>T&C</div>
      <div className={style.rowControlled}>T&C crld</div>
      <div className={style.rowUncontrolled}>T&C uncrld</div>
      <div className={style.rowHeader}>image</div>
      <div className={style.rowControlled}>image crld</div>
      <div className={style.rowUncontrolled}>image uncrld</div>
      <div className={style.rowHeader}>country</div>
      <div className={style.rowControlled}>country crld</div>
      <div className={style.rowUncontrolled}>country uncrld</div>
    </div>
  );
}
