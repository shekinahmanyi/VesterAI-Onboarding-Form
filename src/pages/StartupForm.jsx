import React, { useState } from "react";
import connect from "../images/connect-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "../components/FormContext";
// import { IoIosCalendar } from "react-icons/io";
// import {FaCalendar} from 'react-icons/fa'
import { FaArrowLeft } from "react-icons/fa";

// const CalendarIcon = () => (
//   <span className=" inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//     <FaCalendar className="h-6 w-6 text-gray-500" />
//   </span>
// );

const StartupForm = () => {
  const { formData, dispatch } = useForm();
  const handleInputChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex bg-lightBlue h-screen">
      {/* Background image container */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: 'url("path/to/your/background-image.jpg")' }}
      >
        {/* Centered box */}
        <div className="flex items-center justify-center h-screen">
          {/* Content of the box */}
          <div className="md:w-3/5 h-4/5 flex ">
            {/* Left side (background image) */}
            <div
              className="hidden sm:block md:w-3/5 lg:w-3/5 items-center justify-center bg-cover bg-center bg-blue border border-solid border-white rounded-l-3xl"
              style={{
                backgroundImage: `url(${connect})`,
              }}
            >
              {/* Content inside the left side */}
            </div>

            {/* Right side (form) */}
            <div className="bg-transparent sm:bg-white md:w-2/5 w-full items-center justify-center p-12 rounded-r-3xl">
              <h1 className="font-lato text-5xl md:text-8xl leading-tight tracking-normal text-left text-blue">
                02
              </h1>
              <p className="text-lg md:text-2xl">Your Startup</p>
              {/* Form content */}
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      What Industry Is Your Business?
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="e.g Information Technology"
                        value={formData.Information || ""}
                        onChange={(e) =>
                          handleInputChange("Information", e.target.value)
                        }
                        className="block w-full rounded-md py-2 px-4 text-gray-900 bg-grayWhite focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="technology"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Technology does your company use?
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="technology"
                        name="technology"
                        required
                        placeholder="e.g JavaScript"
                        value={formData.technology || ""}
                        onChange={(e) =>
                          handleInputChange("technology", e.target.value)
                        }
                        className="block w-full rounded-md py-2 px-4 text-gray-900 bg-grayWhite focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        When was your company Founded?
                      </label>
                    </div>
                    <div className="mt-2 w-full">
                      <DatePicker
                        id="date"
                        name="date"
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          handleInputChange("foundingDate", date); // Update your form data with the selected date
                        }}
                        placeholderText="Select Date"
                        className="block w-full rounded-md py-2 px-4 text-gray-900 bg-grayWhite focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                        // calendarIcon={<CalendarIcon />}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={() => {
                        navigate("/");
                      }}
                      className="flex w-1/2 justify-center items-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                    >
                      <FaArrowLeft /> 
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue mt-16"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupForm;
