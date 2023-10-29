import styles from "./CategorySidebar.module.css";
import CategoryToken from "./CategoryToken";

function CategorySidebar({ categories, setCategories, error }) {
  return (
    <div className={styles.sidebar}>
      <p className={styles.heading}>Super App</p>
      <p className={styles.text}>
        Choose <br /> your entertainment <br /> category
      </p>
      {categories.map((data, id) => (
        <CategoryToken
          data={data}
          categories={categories}
          setCategories={setCategories}
          color="#148a08"
          key={id}
        />
      ))}
      {error && (
        <p className={styles.error}>
          <span>⚠️</span>
          {error}
        </p>
      )}
    </div>
  );
}

export default CategorySidebar;
