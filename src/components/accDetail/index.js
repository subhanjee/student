import React from "react";
import {
  UnorderedListOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Cards from "../cards";
function AccDetail() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <h6>
          Home / Accommodation / United Kingdom / London Student Accommodation /
          Abbey College London
        </h6>
      </div>
      <div className="  bg-[#F8F9FA]">
        <hr />
        <div className="container mt-4 mb-4 flex items-center gap-1">
          <img
            src="https://assets.casita.com/_next/static/media/building-icon.be462dbd.svg"
            alt="abc"
          />
          <div className="text-[1.3rem]">
            <a style={{ color: "#495057" }}>Abbey College London</a>{" "}
            <a style={{ color: "#172A7E", fontWeight: "600" }}>Accommodation</a>{" "}
            <a style={{ color: "#761455" }}>(280) Options</a>
          </div>
        </div>
        <hr />
        <div className="container gap-2 mb-4 lg flex  justify-between items-center flexc">
          <div className="flex gap-1 hi">
            <div class="inline-block relative w-45">
              <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 text-[.8rem] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option> Accommodation Type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div class="inline-block relative w-45">
              <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 text-[.8rem] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option> Room Type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div class="inline-block relative w-45">
              <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 text-[.8rem] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Facilities</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div class="inline-block relative w-45">
              <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 text-[.8rem] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Availability</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div class="inline-block relative w-45">
              <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 text-[.8rem] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Weekly Budget</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div class="inline-block relative w-45">
              <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 text-[.8rem] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option> Cancellation Policy</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-1 md mt-0">
            <div className="bg-white text-center border-spacing-1 rounded-[.2rem] w-[2rem] p-1 bor">
              <UnorderedListOutlined />
            </div>
            <div className="bg-white text-center border-spacing-1 rounded-[.2rem] w-[2rem] p-1 bor">
              <AppstoreOutlined />
            </div>
            <div>
              <div class="inline-block relative w-45">
                <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 text-[.8rem] py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>Sort By</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 bor w-[8rem] p-[.12rem]">
                <img
                  src="https://assets.casita.com/_next/static/media/map-icon.79c793f3.svg"
                  alt="abc"
                />
                <div className="text-[.7rem]">Map View</div>
                <div className="mt-1">
                  {" "}
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default AccDetail;
