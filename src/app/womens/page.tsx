import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  const electronicsProducts:string="https://fakestoreapi.com/products/category/women's clothing"
  return (
  <>
    <Navbar/>
    <Products apiString={electronicsProducts}/>
  </>
  );
}
