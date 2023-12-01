import { Link } from "react-router-dom";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";

import styles from "./main.module.css";

export default function Main() {
  return (
    <>
      <Link className={styles.pageLink} to="form-controlled">
        Go to controlled form
      </Link>
      <Link className={styles.pageLink} to="form-uncontrolled">
        Go to uncontrolled form
      </Link>
      <ComparisonTable />
    </>
  );
}
