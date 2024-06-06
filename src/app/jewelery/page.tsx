import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  const electronicsProducts:string="https://fakestoreapi.com/products/category/jewelery"
  return (
  <>
    <Navbar/>
    <Products apiString={electronicsProducts}/>
  </>
  );
}
