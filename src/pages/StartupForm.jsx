/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import connect from "../images/connect-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "../components/FormContext";
import { useCountrySelect } from "../components/CountrySelectContext";
import { FaArrowLeft } from "react-icons/fa";
import Select from "react-select";

const StartupForm = () => {
  const { formData, dispatch } = useForm();
  const handleInputChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { selectedCountry, onCountryChange, resetCountry } = useCountrySelect();
   const [formError, setFormError] = useState(null);

  const technologyOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    // Add more options as needed
  ];

  const handleTechnologyChange = (selectedOptions) => {
    const selectedTechnologies = selectedOptions.map((option) => option.value);
    handleInputChange("technologies", selectedTechnologies);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    const requiredFields = ["industry", "technologies", "foundingDate"]; 
    const isFormValid = requiredFields.every((field) => formData[field]);

    if (!isFormValid) {
      // If any required field is empty, don't submit the form
      setFormError("Please fill in all required fields!!");
      return;
    }

    setFormSubmitted(true);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setFormSubmitted(false); // Reset the form submission state
    dispatch({ type: "RESET_FORM" });
    // Redirect the user to the home page
    resetCountry();
    navigate("/");
  };

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
                      htmlFor="industry"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      What Industry Is Your Business?
                    </label>
                    <div className="mt-2">
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry || ""}
                        onChange={(e) =>
                          handleInputChange("industry", e.target.value)
                        }
                        className="block w-full rounded-md py-2 px-4 text-gray-900 bg-grayWhite focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                      >
                        <option value="" disabled>
                          Select an industry
                        </option>
                        <option value="it">Information Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="education">Education</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="agriculture">Agriculture</option>
                       
                      </select>
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
                    <div className="mt-2  border-0">
                      <Select
                        isMulti
                        options={technologyOptions}
                        value={
                          Array.isArray(formData.technologies)
                            ? technologyOptions.filter((option) =>
                                formData.technologies.includes(option.value)
                              )
                            : []
                        }
                        onChange={handleTechnologyChange}
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
                        required
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          handleInputChange("foundingDate", date); 
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
                      onClick={handleFormSubmit}
                      className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue mt-16"
                    >
                      Submit
                    </button>
                    <div className="text-red-500 text-sm mt-2 items-center font-semibold">{formError}</div>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IF Form is submitted successfully, Display the card */}
      {formSubmitted && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-md text-center">
            <h2 className="text-2xl font-bold mb-4">Successful Completion!</h2>
            <p className="text-gray-700">
              We will be in touch soon. Your information has been submitted
              successfully!
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default StartupForm;
