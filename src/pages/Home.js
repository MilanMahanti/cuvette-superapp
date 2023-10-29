import ProfileCard from "../components/ProfileCard";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.body}>
      <div className={styles["left-side"]}>
        <ProfileCard />
      </div>
    </div>
  );
}

export default Home;
