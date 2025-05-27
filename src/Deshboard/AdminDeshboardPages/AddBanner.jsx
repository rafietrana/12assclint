import axios from "axios";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { FaTag, FaImage, FaInfoCircle, FaBarcode, FaPercentage } from "react-icons/fa";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const AddBanner = () => {
  const [imageLoading, setImageLoading] = useState(false);

  const handleAddBannerBtn = async (e) => {
    e.preventDefault();
    setImageLoading(true);

    const form = e.target;
    const bannername = form.bannername.value.trim();
    const bannerimg = form.bannerimg.files[0];
    const bannertitle = form.bannertitle.value.trim();
    const description = form.description.value.trim();
    const couponcode = form.couponcode.value.trim();
    const couponrate = form.couponrate.value;

    if (!bannerimg) {
      toast.error("Please select an image");
      setImageLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", bannerimg);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        formData,
        {
          headers: { "content-type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        const bannerInfo = {
          bannername,
          bannerimg: res.data.data.display_url,
          bannertitle,
          description,
          couponcode,
          couponrate,
          isActive: false, // corrected from parseInt("false")
        };

        const response = await axios.post("http://localhost:5000/setbanner", bannerInfo);
        if (response.data.insertedId) {
          toast.success("Banner added successfully!");
          form.reset();
        } else {
          toast.error("Failed to add banner");
        }
      } else {
        toast.error("Image upload failed");
      }
    } catch (error) {
      toast.error("Error uploading image or saving banner");
      console.error(error);
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
 
      <form
        onSubmit={handleAddBannerBtn}
        className="bg-white rounded-lg p-6 sm:p-10 border border-gray-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner Name */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-DM font-medium text-gray-700 mb-2">
              <FaTag /> Banner Name
            </label>
            <input
              name="bannername"
              type="text"
              placeholder="Enter banner name"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Banner Title */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-DM font-medium text-gray-700 mb-2">
              <FaInfoCircle /> Banner Title
            </label>
            <input
              name="bannertitle"
              type="text"
              placeholder="Enter banner title"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="flex items-center gap-2 font-DM font-medium text-gray-700 mb-2">
              <FaInfoCircle /> Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              rows={3}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              required
            />
          </div>

          {/* Coupon Code */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-DM font-medium text-gray-700 mb-2">
              <FaBarcode /> Coupon Code
            </label>
            <input
              name="couponcode"
              type="text"
              placeholder="Enter coupon code"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Coupon Rate */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-DM font-medium text-gray-700 mb-2">
              <FaPercentage /> Coupon Rate (%)
            </label>
            <input
              name="couponrate"
              type="number"
              min="0"
              max="100"
              placeholder="Enter coupon rate"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Banner Image */}
          <div className="flex flex-col md:col-span-2">
            <label className="flex items-center gap-2 font-DM font-medium text-gray-700 mb-2">
              <FaImage /> Banner Image
            </label>
            <input
              type="file"
              name="bannerimg"
              accept="image/*"
              className="file-input file-input-bordered bg-white border-gray-300"
              required
            />
          </div>
        </div>

        <button
          disabled={imageLoading}
          type="submit"
          className="mt-8 w-full bg-[#3695EB] text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-3"
        >
          {imageLoading ? (
            <>
              <ImSpinner9 className="animate-spin text-xl" />
              <span>Please wait, uploading...</span>
            </>
          ) : (
            "Add Banner"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddBanner;
