import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  const allProducts='https://fakestoreapi.com/products'
  return (
  <>
    <Navbar/>
    <Products apiString={allProducts}/>
  </>
  );
}
