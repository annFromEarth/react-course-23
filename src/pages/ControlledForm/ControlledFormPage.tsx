import { Link } from "react-router-dom";
import ControlledForm from "../../components/ControlledForm/ControlledForm";

import styles from "./controlledForm.module.css";

export default function ControlledFormPage() {
  return (
    <>
      <Link className={styles.pageLink} to="..\">
        Go back to main
      </Link>
      <ControlledForm />
    </>
  );
}
