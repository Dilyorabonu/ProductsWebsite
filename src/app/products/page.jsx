import Link from "next/link";

//request
const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = await request.json();

  return data;
};

async function Products() {
  const { products } = await getData();
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/singleProduct/${product.id}`}>
              <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="card bg-base-200 shadow-xl">
                    <figure>
                      <img src={product.thumbnail} alt="" />
                    </figure>
                    <div className="card-actions justify-end mx-5">
                      <div className="badge badge-outline">{product.brand}</div>
                      <div className="badge badge-outline">{product.category}</div>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">
                        {product.title}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>{product.description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
