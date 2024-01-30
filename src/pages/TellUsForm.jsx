import React from "react";
// import vector from "../images/vector.jpg"
// import startup from "../images/startup.jpg";
import connect from "../images/connect.jpg"

const TellUsForm = () => {
  const africanCountries = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Democratic Republic of the Congo (Congo-Kinshasa)",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];

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
          <div className="md:w-3/5 h-4/5 flex">
            {/* Left side (background image) */}
            <div
              className="hidden sm:block md:w-3/5 lg:w-3/5 items-center justify-center bg-cover bg-center bg-blue border border-solid border-white"
              style={{
                backgroundImage: `url(${connect})`,
              }}
            >
              {/* Content inside the left side */}
            </div>

            {/* Right side (form) */}
            <div className="bg-transparent sm:bg-white md:w-2/5 w-full items-center justify-center p-12">
              <h1 className="font-lato text-5xl md:text-8xl leading-tight tracking-normal text-left text-blue">
                01
              </h1>
              <p className="text-lg md:text-2xl">Tell us about your startup</p>
              {/* Form content */}
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      What Industry Are You In?
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder=" StartUp's Name"
                        className="block w-full rounded-md py-2 px-4 text-gray-900 bg-grayWhite focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Startup's Website
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id=""
                        name=""
                        type=""
                        required
                        placeholder=" Website"
                        className="block w-full rounded-md py-2 px-4 text-gray-900 bg-grayWhite focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Where in Africa is your Company Legally registered?
                      </label>
                    </div>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        required
                        className="block w-full rounded-md py-2 px-4 text-gray-900 bg-grayWhite focus:outline-none focus:ring focus:border-blue-300 sm:text-sm sm:leading-6"
                      >
                        <option value="" disabled selected>
                          Select a country
                        </option>
                        {africanCountries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue mt-12"
                    >
                      Next
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

export default TellUsForm;
