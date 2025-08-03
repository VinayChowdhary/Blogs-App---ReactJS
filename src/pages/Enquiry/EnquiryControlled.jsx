import { useState } from "react";

const EnquiryControlled = () => {
  const [name, setName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [mobNoError, setMobNoError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const onNameChange = (e) => {
    console.log("Name change:", e.target.value);
    //max length 12 char
    if (e.target.value.length <= 12) {
      setName(e.target.value);
      setNameError(false);
    } else {
      //store the error here
      setNameError(true);
    }
  };
  const onMobNoChange = (e) => {
    console.log("Mobile change:", e.target.value);
    if (e.target.value.length <= 10) {
      setMobNo(e.target.value);
      setMobNoError(false);
    } else {
      setMobNoError(true);
    }
  };
  const onMessageChange = (e) => {
    console.log("Message change:", e.target.value);
    if (e.target.value.length <= 30) {
      setMessage(e.target.value);
      setMessageError(false);
    } else {
      setMessageError(true);
    }
  };

  return (
    <div>
      <hr />
      <h3>Controlled Enquiry Form </h3>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor="name">Enter your Name : </label>
          <input
            onChange={onNameChange}
            name="name"
            id="name"
            type="text"
            value={name}
          />{" "}
          <span
            style={{
              display: nameError ? "inline-block" : "none",
              color: "red",
            }}
          >
            The maximum allowed characters are 12
          </span>
        </div>
        <div>
          <label htmlFor="mobNo">Enter your Mobile number : </label>
          <input
            onChange={onMobNoChange}
            name="mobNo"
            id="mobNo"
            type="number"
            value={mobNo}
          />{" "}
          <span
            style={{
              display: mobNoError ? "inline-block" : "none",
              color: "red",
            }}
          >
            The mobile number should be of 10 digits
          </span>
        </div>
        <div>
          <label htmlFor="message">Enter your Message : </label>
          <textarea
            onChange={onMessageChange}
            name="Message"
            id="message"
            value={message}
          ></textarea>{" "}
          <span
            style={{
              display: messageError ? "inline-block" : "none",
              color: "red",
            }}
          >
            The maximum allowed characters are 30
          </span>
        </div>
        <input type="submit" name="" id="" /> <br />
        {/* <button type="submit">Submit Button</button> */}
      </form>
    </div>
  );
};
export default EnquiryControlled;
