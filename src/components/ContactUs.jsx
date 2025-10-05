import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="m-4 p-4 text-lg text-center">
        <h1>Contact Us</h1>
      </div>
      <form className="text-center">
        <div className="flex flex-col w-3/12 m-auto">
          <input
            type="text"
            placeholder="Name"
            className="border border-black m-4 p-4"
          />
          <input
            type="text"
            placeholder="Please type your query here"
            className="border border-black m-4 p-4"
          />
        </div>
        <button className="border border-black m-4 p-4 bg-purple-200 rounded-2xl cursor-pointer">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactUs;
