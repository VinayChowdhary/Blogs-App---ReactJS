import { useRef } from "react";

const EnquiryUncontrolled = () => {
  const nameRef = useRef();
  const mobNoRef = useRef();
  const messageRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // console.log(nameRef.current.value)
    const enquiryData = {
      name: nameRef.current.value,
      mobNo: mobNoRef.current.value,
      message: messageRef.current.value,
    };
    console.log(enquiryData);
    // nameRef.current.style.backgroundColor = "blue";
  };

  return (
    <div>
      <hr />
      <h3>Uncontrolled Enquiry Form - Refs</h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Enter your Name : </label>
          <input ref={nameRef} name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="mobNo">Enter your Mobile number : </label>
          <input ref={mobNoRef} name="mobNo" id="mobNo" type="number" />
        </div>
        <div>
          <label htmlFor="message">Enter your Message : </label>
          <textarea ref={messageRef} name="Message" id="message"></textarea>
        </div>
        <input type="submit" name="" id="" /> <br />
        {/* <button type="submit">Submit Button</button> */}
      </form>
    </div>
  );
};
export default EnquiryUncontrolled;
