import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.text}>
        <p className={styles.heading}>Discover new things on Superapp</p>
      </div>
    </div>
  );
}

export default Sidebar;
