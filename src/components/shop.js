import { useEffect, useState } from "react";
import styles from "../index.module.css";
import UpdateButton from "../components/UpdateButton";

export default function Shop() {
  let url = "https://fakestoreapi.com/products";
  let [products, stateProducts] = useState([]);

  function updCount(id, upd) {
    // console.log(id);
    let newProducts = products.map((product) => {
      if (product.id === id) {
        if (product.count) {
          product.count = product.count + upd;
        } else {
          product.count = upd;
        }
      }
      return product;
    });
    console.log(products);
    stateProducts(newProducts);
  }
  function incCount(id) {
    // console.log(id);
    // stateProducts(count + 1);
  }

  useEffect(() => {
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((jsonResult) => {
        stateProducts(jsonResult);
      });
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <div className={styles.shop}>
        {products.length &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <div>{product.title}</div>
                <UpdateButton
                  name="-"
                  onClick={() => {
                    updCount(product.id, -1);
                  }}
                />
                <UpdateButton
                  name="+"
                  onClick={() => {
                    updCount(product.id, 1);
                  }}
                />
                <div className={styles.place}>{product.count}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Shop />
    </>
  );

  return <div className="App"></div>;
}
