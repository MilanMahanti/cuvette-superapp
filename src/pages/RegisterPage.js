import Sidebar from "../components/sidebar/Sidebar";
import Form from "../components/form/Form";
import styles from "./RegisterPage.module.css";
function RegisterPage() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Form />
    </div>
  );
}

export default RegisterPage;
