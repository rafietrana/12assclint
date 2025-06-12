 

const ProductDetails = ({ product }) => {
  const {
    medicineName,
    brand,
    price,
    category,
    stock,
    imageUrl,
    description,
  } = product;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={medicineName}
            className="rounded-xl w-full h-auto object-cover shadow"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{medicineName}</h2>
          <p className="text-lg text-gray-600 font-medium">Brand: <span className="text-red-500">{brand}</span></p>
          <p className="text-xl font-semibold text-green-600">${price}</p>
          <p className="text-sm text-gray-500">Category: {category}</p>
          <p className="text-sm text-gray-500">In Stock: {stock}</p>

          <div
            className="prose prose-blue max-w-full mt-4"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>

          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
