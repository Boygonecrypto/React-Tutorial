import React from "react";

const Products = ({ image, price, title, children }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{price}</p>
      <p>{title}</p>
      {children}
    </div>
  );
};

const PropsChildren = () => {
  return (
    <div>
      <h1>List Of Available Products</h1>
      <div className="flex gap-3">
        <Products
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/3172113/1.jpg?4689"
          }
          price={55000}
          title={"Itel waterproof"}
        />
        <Products
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/1724373/1.jpg?0045"
          }
          price={16000}
          title={"Synix 2.2l Kettle"}
        />
        <Products
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0932393/1.jpg?5742"
          }
          price={200}
          title={"Iphone"}
        >
          <p>black friday deals</p>
        </Products>
      </div>
    </div>
  );
};

export default PropsChildren;
