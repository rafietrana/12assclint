const PromotionSection = () => {
    // https://i.ibb.co/72s9yYz/portfolio-image-01.jpg
    // https://i.ibb.co/ySmB7mJ/portfolio-image-02.jpg
    // https://i.ibb.co/VmhbJDN/portfolio-image-05.jpg
  return (
    <div>
    <section className="bg- gray-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12  ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-Outfit">Special Offer: Free Health Checkup</h2>
          <p className="text-gray-600 text-lg w-6/12 mx-auto">Book your appointment today and receive a free health checkup with every consultation. Offer valid until the end of the month. Ensure your health and well-being with our comprehensive services.</p>
        </div>
        
 

        <div className="text-center mb-12 w-9/12 mx-auto">
 
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <img src="https://i.ibb.co/72s9yYz/portfolio-image-01.jpg" alt="Patient 1" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <p className="text-gray-600">The staff was incredibly professional and friendly. The health checkup was thorough and gave me peace of mind.</p>
              <p className="text-gray-800 font-bold mt-4">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <img src="https://i.ibb.co/ySmB7mJ/portfolio-image-02.jpg" alt="Patient 2" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <p className="text-gray-600">I highly recommend their services. The doctors are very knowledgeable and the facilities are top-notch.</p>
              <p className="text-gray-800 font-bold mt-4">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <img src="https://i.ibb.co/VmhbJDN/portfolio-image-05.jpg" alt="Patient 3" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <p className="text-gray-600">Booking an appointment was easy and the care I received was excellent. I will definitely come back</p>
              <p className="text-gray-800 font-bold mt-4">- Mark Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
    </div>
  );
};

export default PromotionSection;
