//request
const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/products/" + id);

  const data = await request.json();

  return data;
};

async function Product({ params }) {
  const product = await getData(params.id);
  return (
    <div className="card bg-base-200 w-100 shadow-xl mb-10">
      <div className="card-actions justify-end mt-5 mx-5">
        <div className="badge badge-primary">Price: ${product.price}</div>
        <div className="badge badge-primary">
          Discount: {product.discountPercentage}%
        </div>
      </div>
      <figure>
        <img src={product.thumbnail} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start mt-2">
          <div className="badge badge-outline">Rating: {product.rating}</div>
          <div className="badge badge-outline">Stock: {product.stock}</div>
        </div>
        <h2 className="card-title">
          Title: {product.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
