import React from 'react'
import connect from "../images/connect-removebg-preview.png"

const StartupForm = () => {
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
            <p className="text-lg md:text-2xl">Tell us about your startup</p>
            {/* Form content */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    What Industry Are You In?
                  </label>
                  <div className="mt-2">
                    <input
                      id=""
                      name=""
                      type=""
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
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                  >
                    Back to 01
                  </button>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue mt-4"
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
  )
}

export default StartupForm
