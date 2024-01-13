import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/filter/Filter";
import ProductList from "../../components/productCard/ProductList";
import SectionWrapper from "../../wrapper/sectionWrapper/SectionWrapper";

function AllProducts() {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <SectionWrapper sectionTitle="All Products" filter={<Filter />}>
      <ProductList />
    </SectionWrapper>
  );
}

export default AllProducts;
