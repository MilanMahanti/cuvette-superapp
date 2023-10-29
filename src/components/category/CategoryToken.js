import styles from "./CategoryToken.module.css";

function CategoryToken({
  data,
  setCategories,
  categories,
  setSelected,
  color,
}) {
  function handelClick() {
    setCategories(categories.filter((id) => id !== data));
  }
  return (
    <button
      className={styles.token}
      style={{ background: `${color}` }}
      onClick={() => handelClick()}
    >
      {data}
      <span>X</span>
    </button>
  );
}

export default CategoryToken;
