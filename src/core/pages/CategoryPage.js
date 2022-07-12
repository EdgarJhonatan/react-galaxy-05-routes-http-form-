import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const CategoryPage = () => {
   const { categoryName } = useParams();
   const [searchParams] = useSearchParams();

   return (
      <div>
         CategoryPage {categoryName} {searchParams.get("brand")}{" "}
      </div>
   );
};

export default CategoryPage;
