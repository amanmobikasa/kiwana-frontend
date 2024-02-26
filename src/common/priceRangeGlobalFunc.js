import { useCallback } from "react";

const filterProductsByPriceRange = (products, minPrice, maxPrice) => {
    return products.filter(product => parseInt(product.price) >= minPrice && parseInt(product.price) <= parseInt(maxPrice));
}
export default filterProductsByPriceRange;