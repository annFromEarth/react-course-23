import { Link } from "react-router-dom";
import styles from "./uncontrolledForm.module.css";
import UncontrolledForm from "../../components/UncontrolledForm/UncontrolledForm";

export default function UncontrolledFormPage() {
  return (
    <>
      <Link className={styles.pageLink} to="..\">
        Go back to main
      </Link>
      <UncontrolledForm />
    </>
  );
}
