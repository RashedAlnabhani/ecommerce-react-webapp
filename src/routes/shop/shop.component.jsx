import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const products = useContext(ProductsContext);
  return (<>
    <div>
      <h1>Shop</h1>
      <div className="products-container">
        {products.map(
          (product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            )
          })}
      </div>
    </div>
  </>)
}
export default Shop;
