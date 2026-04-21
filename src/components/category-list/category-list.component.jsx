import CategoryCard from "../category-card/category-card.component";

import "./category-list.styles.scss";

const CategoryList = ({ categories }) => {
  return (
    <>
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
