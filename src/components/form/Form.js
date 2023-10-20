import styles from "./Form.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const KEY = "UserData";
function Form() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    mobile: "",
    email: "",
    check: false,
  });
  const [errors, setErrors] = useState({});
  function handelChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  function formErros(data) {
    const error = {};
    if (data.name === "") {
      error.name = "Name can't be blank";
    }
    if (data.username === "") {
      error.username = "Name can't be blank";
    }
    if (data.mobile === "") {
      error.mobile = "Name can't be blank";
    }
    if (data.email === "") {
      error.email = "Email can't be blank";
    }
    if (data.check === false) {
      error.check = "Check this box if you want to proceed";
    }
    return error;
  }
  function handelSubmit(e) {
    e.preventDefault();
    const errors = formErros(userData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    updateData(userData);
  }
  function updateData(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
    setErrors({});
    setUserData({
      name: "",
      username: "",
      mobile: "",
      email: "",
      check: false,
    });
  }
  return (
    <div className={styles.formside}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} alt="logo" />
          <p className={styles.headertext}>Create your new account</p>
        </div>
        <div className={styles.formcontainer}>
          <form className={styles.form} onSubmit={handelSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={(e) => handelChange(e)}
            />
            {errors?.name && <p className={styles.error}>{errors.name}</p>}
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={userData.username}
              onChange={(e) => handelChange(e)}
            />
            {errors?.username && (
              <p className={styles.error}>{errors.username}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={(e) => handelChange(e)}
            />
            {errors?.email && <p className={styles.error}>{errors.email}</p>}

            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              value={userData.mobile}
              onChange={(e) => handelChange(e)}
            />
            {errors?.mobile && <p className={styles.error}>{errors.mobile}</p>}

            <label>
              <input
                type="checkbox"
                name="check"
                value={userData.check}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.checked,
                  })
                }
              />
              Share my registration data with Superapp
            </label>
            {errors?.check && <p className={styles.error}>{errors.check}</p>}

            <button className={styles.button}>Sign Up</button>
          </form>
        </div>
        <div className={styles.footer}>
          <p>
            By clicking on Sign up. you agree to Superapp
            <span className={styles.textgreen}>
              Terms and Conditions of Use
            </span>
            <br />
            <br />
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <span className={styles.textgreen}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
