import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTestResult = () => {
    const {id} = useParams()
    const handleLinkAddBtn = (e) => {
        e.preventDefault();
    
        const link = e.target.doclink.value;
        console.log("alhamdulillah link is", link);
    
        const resultLink = {
          link,
        };
    console.log("client side result link is", resultLink);
    
        axios
          .patch(`http://localhost:5000/updateField/${id}`, resultLink)
          .then((res) => {
            console.log("alhamdulillah response is", res.status);
            if (res.status === 200) {
              toast.success("Successfully added");
         
            }
          });
      };
  return (
    <div>
                      <form onSubmit={handleLinkAddBtn} className="w-full space-y-4">
                        <label>Provide Link</label>
                        <br />
                        <input
                          type="text"
                          required
                          name="doclink"
                          className="px-3 py-2 rounded-lg outline-none border w-full"
                        />
                        <input
                          type="submit"
                          value="Add Now"
                          className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                        />
                      </form>
    </div>
  );
};

export default UpdateTestResult;