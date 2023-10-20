import Categories from "../components/category/Categories";
import styles from "./CategoryPage.module.css";
function CategoryPage() {
  return (
    <div className={styles.app}>
      <Categories />
    </div>
  );
}

export default CategoryPage;
