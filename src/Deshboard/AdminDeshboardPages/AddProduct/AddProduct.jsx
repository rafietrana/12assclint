import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [medicineName, setMedicineName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");

  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const fileInputRef = useRef("null");

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      // Upload to imgbb
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      if (!data.success) {
        toast.error("Image upload failed!");
        return;
      }

      const uploadedImageUrl = data.data.url;

      const newProduct = {
        medicineName,
        brand,
        price: parseFloat(price),
        category,
        stock: parseInt(stock),
        imageUrl: uploadedImageUrl,
        description,
      };

      const result = await fetch(
        "https://my-ass-12-server.vercel.app/postProducts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct),
        }
      );

      const responseData = await result.json();

      if (responseData.insertedId) {
        toast.success("  Product has been added.");
      }

      // Reset form
      setMedicineName("");
      setBrand("");
      setPrice("");
      setCategory("");
      setStock("");
      setImageFile(null);
      setDescription("");

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (err) {
      toast.error("❌ Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl mt-10">
      <form onSubmit={handleSubmitButton} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Medicine Name
          </label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            placeholder="Enter medicine name"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Brand
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Enter brand name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Price ($)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            >
              <option className="bg-gray-200" value="">Select category</option>
              <option value="tablet">Tablet</option>
              <option value="medicaldevice">Medical Device</option>
              <option value="syrup">Syrup</option>
              <option value="capsule">Capsule</option>
              <option value="skincare">Skin Care</option>
              <option value="ointment">Ointment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Stock Quantity
            </label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Enter stock quantity"
              className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            ref={fileInputRef}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Description
          </label>
          <div className="h-52 mb-8">
            <ReactQuill
              theme="snow"
              className="h-full"
              value={description}
              onChange={setDescription}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#3695EB] hover:bg-[#2e83cf] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
