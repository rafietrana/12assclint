import axios from "axios";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const AddBanner = () => {
  const [imageLoading, setImageLoading] = useState(false);
  const handleAddBannerBtn = async (e) => {
    setImageLoading(true);
    e.preventDefault();
    // console.log("alhamdulillah your handleabtn is now working mashalllah ");
    const form = e.target;
    const bannername = form.bannername.value;
    const bannerimg = form.bannerimg.files[0];
    const bannertitle = form.bannertitle.value;
    const description = form.description.value;
    const couponcode = form.couponcode.value;
    const couponrate = form.couponrate.value;

    // console.log("banner information is", bannerInfo);

    const formData = new FormData();

    formData.append("image", bannerimg);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
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
          isActive: parseInt("false"),
        };
        // console.log("alhamdulillah singup information is", bannerInfo);

        axios
          .post("https://my-ass-12-server.vercel.app/setbanner", bannerInfo)
          .then((res) => {
            // console.log("alhamdulillah response is ", res.data);
            if (res.data.insertedId) {
              toast.success("alhamdulillah sucessfully added all data");
            }
          });
      } else {
        // console.log("i found error");
      }
    } catch (error) {
      // console.error("error is", error);
      toast.error("found error when starting upload image");
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-9/12 ">
        <div>
          <p className="font-DM font-[600] text-[30px] text-center">
            Add Banner
          </p>
          <div className="border-2 p-5 ">
            <form onSubmit={handleAddBannerBtn}>
              <div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Banner Name
                  </label>
                  <input
                    name="bannername"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Banner Title
                  </label>
                  <input
                    name="bannertitle"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Description
                  </label>
                  <input
                    name="description"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Coupon Code
                  </label>
                  <input
                    name="couponcode"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Coupon Rate
                  </label>
                  <input
                    name="couponrate"
                    type="number"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                  />
                </div>
                <div>
                  <label className="font-DM font-[400] text-[17px] ">
                    Banner Image
                  </label>
                  <input
                    type="file"
                    name="bannerimg"
                    className="file-input file-input-bordered bg-white border-gray-200 w-full file-input-ghost mt-4"
                    required
                  />
                </div>
              </div>
              <button
                disabled={imageLoading}
                className="bg-gradient-to-b my-5 from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  "
              >
                {imageLoading ? (
                  <div className=" flex justify-center items-center gap-2">
                    <p className="animate-spin">
                      <ImSpinner9 />{" "}
                    </p>
                    <p className="font-Outfit font-[500] text-[16px]">
                      Please w8 Image is Uploading...
                    </p>
                  </div>
                ) : (
                  "SIGN UP"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
