import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutDefault from "../layout/LayoutDefault";
import HomePage from "../screens/HomePage";
import ProductPage from "../screens/ProductPage";
import DetailProductPage from "../screens/DetailProductPage";
import NotFoundPage from "../screens/NotFoundPage";

const DeclareRouter = () => {
  return (
    <Routes>
      {/* Router of Login */}
      {/* Router of Register */}
      {/* Router of Home */}

      <Route element={<LayoutDefault />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:slug" element={<DetailProductPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default DeclareRouter;
