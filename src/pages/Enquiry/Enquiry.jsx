import React from "react";

const Enquiry = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted.");
    console.log(e);
    const enquiryData = {
      name: e.target.name.value,
      mobNo: e.target.mobNo.value,
      message: e.target.message.value,
    };
    console.log(enquiryData);
    //call the API to send the data
  };

  return (
    <div>
      <h3>Enquiry Form - Events</h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Enter your Name : </label>
          <input name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="mobNo">Enter your Mobile number : </label>
          <input name="mobNo" id="mobNo" type="number" />
        </div>
        <div>
          <label htmlFor="message">Enter your Message : </label>
          <textarea name="Message" id="message"></textarea>
        </div>
        <input type="submit" name="" id="" /> <br />
        {/* <button type="submit">Submit Button</button> */}
      </form>
    </div>
  );
};
export default Enquiry;
