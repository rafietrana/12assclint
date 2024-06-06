import { useQuery } from "@tanstack/react-query";
import axios from "axios";
 
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const TestUpdate = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const params = useParams();
  console.log("alhamdulillah param is ", params.id);

  const { data: testPageData = {} } = useQuery({
    queryKey: ["gettest", params?.id],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/gettest/${params.id}`);
      return res.data;
    },
  });

  console.log("alhamdulillah test page data is", testPageData);
  

  // testupdate
  const handleTestUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const testname = form.testname.value;
    const testdetails = form.testdetails.value;
    const testprice = form.testprice.value;
    const bannerimg = form.bannerimg.value;
    const slotsnumber = form.slotsnumber.value;
    const date = form.date.value;
    const updateTestBtn = {
      testname,
      testdetails,
      testprice,
      bannerimg,
      slotsnumber: parseInt(slotsnumber),
      date,
    };
       console.log('updatetestdata is', updateTestBtn);

    axios.patch(`http://localhost:5000/updatetest/${testPageData._id}`, updateTestBtn)
      .then((res) => {
        console.log("alhamdulillah update response is ", res.data);
        if(res.data.matchedCount >0){
          toast.success('sucessfully updated test data')
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-9/12 ">
          <div>
            <p className="font-DM font-[600] text-[30px] text-center">
              Update Test Data
            </p>
            <div className="border-2 p-5 ">
              <form onSubmit={handleTestUpdate}>
                <div>
                  <div className="space-y-2">
                    <label className="font-DM font-[400] text-[17px] ">
                      Test Name
                    </label>
                    <input
                      name="testname"
                      defaultValue={testPageData.testname}
                      type="text"
                      className="w-full px-3 py-2 rounded-lg border outline-none "
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-DM font-[400] text-[17px] ">
                      Test Details
                    </label>
                    <input
                      name="testdetails"
                      type="text"
                      defaultValue={testPageData.testdetails}
                      className="w-full px-3 py-2 rounded-lg border outline-none "
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-DM font-[400] text-[17px] ">
                      Test Price
                    </label>
                    <input
                      name="testprice"
                      type="text"
                      defaultValue={testPageData.testprice}
                      className="w-full px-3 py-2 rounded-lg border outline-none "
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-DM font-[400] text-[17px] ">
                      Banner Image
                    </label>
                    <input
                      name="bannerimg"
                      type="text"
                      defaultValue={testPageData.bannerimg}
                      className="w-full px-3 py-2 rounded-lg border outline-none "
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-DM font-[400] text-[17px] ">
                      Slots Number
                    </label>
                    <input
                      name="slotsnumber"
                      type="text"
                      defaultValue={testPageData.slotsnumber}
                      className="w-full px-3 py-2 rounded-lg border outline-none "
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-DM font-[400] text-[17px] ">
                      Select Date
                    </label>
                    <input
                      name="date"
                      type="date"
              
                      defaultValue={testPageData.date}
                      min={currentDate}
                      className="w-full px-3 py-2 rounded-lg border outline-none "
                   
                      required
                    />
                  </div>
                </div>
                <button className="bg-gradient-to-b my-5 from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                  Updatre Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestUpdate;
