import { Link } from "react-router-dom";
import styles from "./controlledForm.module.css";

export default function ControlledForm() {
  return (
    <>
      <Link className={styles.pageLink} to="..\">
        Go back to main
      </Link>
      <div>I am a ControlledForm</div>
    </>
  );
}
