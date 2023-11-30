import { Link } from "react-router-dom";
import styles from "./uncontrolledForm.module.css";

export default function UncontrolledForm() {
  return (
    <>
      {" "}
      <Link className={styles.pageLink} to="..\">
        Go back to main
      </Link>
      <div>I am an Uncontrolled Form</div>
    </>
  );
}
