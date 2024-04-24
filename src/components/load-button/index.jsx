import React, { useEffect, useState } from "react";
import "./styles.css";

function LoadMore() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const result = await response.json();
      console.log(result.products);
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisable(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={disable}
        onClick={() => setCount(count + 1)}
        className="button-container"
      >
        Load more
      </button>
      {disable ? <p>You have reached to 100 products</p> : null}
    </div>
  );
}

export default LoadMore;
