import { Cookie, Phone } from "lucide-react";
import bg from "../assets/bg3.jpg";
import { TbAirConditioning, TbLocationFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
const DirectionsRegistration = () => {
  return (
    <section
      className="py-12 px-6 bg-gray-700 text-white 
    bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" mx-auto">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className=" font-semibold mb-6 text-4xl">
              Our <span className="text-4xl ">Directions</span>
            </h3>
            <div className="relative">
              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7443.435069325953!2d79.1329382321892!3d21.123824630147176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c75e15711bbf%3A0x9455d6b5417e150b!2sABAX%20ACADEMY!5e0!3m2!1sen!2sin!4v1742811739745!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="absolute bottom-0 left-0 bg-blue-400 p-4 text-white text-sm w-3/4 rounded-tr-md">
                <h4 className="font-bold mb-2">Address</h4>
                <p className="text-xs leading-relaxed">
                  Plot No. 78, New 5, rev 0, 4, Kharbi Rd, near Hanuman Mandir,
                  Gadge Baba Nagar, New Sahakar Nagar, Kharbi, Nagpur,
                  Maharashtra 440024
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-4xl font-semibold mb-6">
              Registration <span className="font-normal">Form</span>
            </h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 rounded text-gray-800 bg-gray-100"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 rounded text-gray-800 bg-gray-100"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-1/2 p-2 rounded text-gray-800 bg-gray-100"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-1/2 p-2 rounded text-gray-800 bg-gray-100"
                />
              </div>
              <div>
                <select className="w-full p-2 rounded text-gray-800 bg-gray-100">
                  <option value="">Status</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Mobile No"
                  className="w-full p-2 rounded text-gray-800 bg-gray-100"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded cursor-pointer"
                >
                  Submit
                </button>
              </div>

              <div className="mt-8 text-lg space-y-2 ">
                <div className="flex  items-center space-x-2">
                  <TbLocationFilled className="text-teal-500 text-lg" />
                  <p>Gandipet Nagar, Puplic Road Nagar</p>
                </div>
                <div className="flex  items-center space-x-2">
                  <Phone className="text-teal-500 text-lg" />
                  <p>+91 9182573499, +91 9182573499</p>
                </div>
                <div className="flex  items-center space-x-2">
                  <MdEmail className="text-teal-500 text-lg" />
                  <p>abaxacademy03@gmail.com</p>
                </div>
                <div className="flex  items-center space-x-2">
                  <Cookie className="text-teal-500 text-lg" />
                  <p>Cookie & Policy</p>
                </div>
                <div className="flex  items-center space-x-2">
                  <TbAirConditioning className="text-teal-500 text-lg" />
                  <p>Terms & Conditions</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsRegistration;
