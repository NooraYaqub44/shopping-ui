import React from "react";
import CaptionCarousel from "./component/CaptionCarousel";
import { ShopList } from "./component/Shopping/Shoplist";
import Categories from "./component/Categories";
import { Footer } from "./component/Footer/Footer";
import ProductSlider from "./component/Products/ProductSlider";
import { ProductList } from "./component/Products/ProductList";
import { ProductGrid } from "./component/Products/ProductGrid";


export default function AppContainer() {
  return (
    <div>
       <Categories/>
      <CaptionCarousel />
      <ProductSlider/>
      <ShopList />
      <Footer/>
    </div>
  );
}
