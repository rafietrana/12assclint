const AddBanner = () => {


  const handleAddBannerBtn = (e) =>{
    e.preventDefault()
    console.log('alhamdulillah your handleabtn is now working mashalllah ');
  }
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
                    Banner Image
                  </label>
                  <input
                    name="bannerimg"
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-DM font-[400] text-[17px] ">
                    Banner Title
                  </label>
                  <input
                    name="bannertilte"
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
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border outline-none "
                  />
                </div>
              </div>
              <button className="bg-gradient-to-b my-5 from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                ADD BANNER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
