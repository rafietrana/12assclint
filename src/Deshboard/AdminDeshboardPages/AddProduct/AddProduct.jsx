import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddProduct = () => {
  const [value, setValue] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white   rounded-xl mt-10">
 
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Medicine Name</label>
          <input
            type="text"
            placeholder="Enter medicine name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Brand</label>
            <input
              type="text"
              placeholder="Enter brand name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Price ($)</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Category</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            >
              <option value="">Select category</option>
              <option value="tablet">Tablet</option>
              <option value="syrup">Syrup</option>
              <option value="capsule">Capsule</option>
              <option value="ointment">Ointment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Stock Quantity</label>
            <input
              type="number"
              placeholder="Enter stock quantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Image URL</label>
          <input
            type="text"
            placeholder="Paste image URL here"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3695EB]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
          <div className="h-52 mb-8">
            <ReactQuill
              theme="snow"
              className="h-full"
              style={{ height: '100%' }}
              value={value}
              onChange={setValue}
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
