import { useEffect, useState } from "react";
import createApi from "../../../api/createApi";
import { product } from "../../../types/Types";
import { ProductCard } from "../component/ProductCard";

export const HomeView = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const getSudaderas = async () => {
      try {
        const response = await createApi.get("/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getSudaderas();
  }, []);


  const urlImage = (image:string)=>{ 
    return `http://localhost:3000/img/${image}` }

  console.log(urlImage(products[0]?.image));
  return (
    <div>
      <div className="columns-3">
        {products.map((product: product) => (
          <ProductCard
            key={product.id}
            image={(urlImage(product.image))}
            title={product.name}
            price={product.price}
            stock={product.inventory}
          />
        ))}
      </div>
    </div>
  );
};
