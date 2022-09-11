import React from 'react';

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = ({ product, onVote }) => {
  const plus = () => {
    onVote(product, +1);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    onVote(product, -1);
  };
  return (
    <li>
      <span>{product.name}</span> - <span>votes: {product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    const tempProduct = { ...dir };
    const newV = tempProduct.votes + 1;
    console.log(newV);

    setProducts([...products]);

    // setProducts(product.map
    // console.log(dir, index);
  };

  return (
    <ul>
      {products.length &&
        products.map((product, index) => {
          return (
            // <li>
            //   <span>{product.name}</span> - <span>votes: {product.votes}</span>
            //   <button>+</button> <button>-</button>
            // </li>
            <Product
              onVote={() => onVote(product, index)}
              product={product}
              key={index}
            />
          );
        })}
    </ul>
  );
};

export default GroceryApp;

// document.body.innerHTML = "<div id='root'></div>";

// ReactDOM.render(<GroceryApp
//   products={[
//     { name: "Oranges", votes: 0 },
//     { name: "Bananas", votes: 0 }
//   ]}
// />, document.getElementById('root'));

// let plusButton = document.querySelector("ul > li > button");
// if(plusButton) {
//   plusButton.click();
// }
// console.log(document.getElementById('root').outerHTML)
