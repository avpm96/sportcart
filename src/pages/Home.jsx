import { useState } from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { Link } from "react-router-dom";
export const Home = ({}) => {
  //useState que representa los productos que se a#aden al carrito
  const [allProducts, setAllProducts] = useState([]);
  // useState para el total 
  const [total, setTotal] = useState(0);
  //contador de productos 
  const [countProducts, setCountProducts] = useState(0);
  const [stock, setStock] = useState(0);

  return (
    <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        stock={stock}
        setStock={setStock}
      />
      <div className="link">
        <Link  to="create">
          Create a new product
        </Link>
      </div>

      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        stock={stock}
        setStock={setStock}
      />
    </>
  );
};
