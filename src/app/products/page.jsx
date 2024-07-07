//request
const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = request.json();

  return data;
};

function Products() {
  const data = getData();
  return <div>Products</div>;
}

export default Products;
