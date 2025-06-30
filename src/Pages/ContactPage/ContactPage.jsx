import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../../Shyerd/Footer/Footer";

const ContactPage = () => {
    return (
        <>
        <div
            className="min-h-screen bg-white text-black flex flex-col justify-center py-12 sm:px-6 lg:px-8"
            style={{ colorScheme: 'light' }} // prevent system dark mode
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <FaPhoneAlt className="text-green-600 text-2xl" />
                    <h2 className="font-Outfit text-center text-3xl font-semibold">
                        Contact Us
                    </h2>
                </div>
                <div className="mt-4 bg-white border border-gray-200 rounded-xl p-6 sm:px-10">
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
        </>
    );
};

export default ContactPage;
