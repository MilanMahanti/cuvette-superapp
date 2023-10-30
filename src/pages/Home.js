import NewsCard from "../components/NewsCard";
import ProfileCard from "../components/ProfileCard";
import WeatherCard from "../components/WeatherCard";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.body}>
      <div className={styles["left-side"]}>
        <ProfileCard />
        <WeatherCard />
      </div>
      <div className={styles["right-side"]}>
        <NewsCard />
      </div>
    </div>
  );
}

export default Home;
