import styles from "./ProfileCard.module.css";
import profile from "../assets/Profilepic.png";
const USER_KEY = "UserData";
const CATEGORIES_KEY = "Categories";

function ProfileCard() {
  const userDetails = JSON.parse(localStorage.getItem(USER_KEY));
  const categories = JSON.parse(localStorage.getItem(CATEGORIES_KEY));
  console.log(categories);
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <img src={profile} alt="profile" />
      </div>
      <div className={styles.details}>
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <p className={styles.username}>{userDetails.username}</p>
        <div className={styles.tokens}>
          {categories.map((data) => (
            <Token data={data} key={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Token({ data }) {
  return <div className={styles.token}>{data}</div>;
}
export default ProfileCard;
