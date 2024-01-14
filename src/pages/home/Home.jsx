import React from "react";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import ProductReviewList from "../../components/product-review/ProductReviewList";
import ProductList from "../../components/productCard/ProductList";
import SectionWrapper from "../../wrapper/sectionWrapper/SectionWrapper";

function Home() {
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <HeroSection />
      <SectionWrapper
        sectionTitle="All product"
        filter={<Filter />}
        url="/allproducts"
      >
        <ProductList limit={16} />
      </SectionWrapper>
      <SectionWrapper sectionTitle="Cutomer reviews" url="/reviews">
        <ProductReviewList limit={8} />
      </SectionWrapper>
      {/* <Track/> */}
      {/* <Testimonial/> */}
    </div>
  );
}

export default Home;
